import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * fraudStatus:
 * -1: rejected
 * 0: suspicious
 * 1: approved (default)
 */

/**
 * Type:
 * 1: admin
 * 2: user
 */

/**
 * entityStatus:
 * -1: deleted
 * 0: inactive
 * 1: active
 */

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  firstName: {
    type: String,
    required: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
  },
  nickname: {
    type: String,
    required: false,
    trim: true,
  },
  website: {
    type: String,
    required: false,
    trim: true,
  },
  twitter: {
    type: String,
    required: false,
    trim: true,
  },
  facebook: {
    type: String,
    required: false,
    trim: true,
  },
  type: {
    type: Number,
    required: true,
  },
  fraudStatus: {
    type: Number,
    required: true,
    default: 1,
  },
  entityStatus: {
    type: Number,
    required: true,
    default: 1,
  },
}, {
  id: false,
  strict: 'throw',
  useNestedStrict: true,
  timestamps: true,
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.virtual('name')
  .get(function () {
    if (this.nickname) {
      return this.nickname;
    } else if (this.firstName || this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    } else {
      return this.email.substr(0, this.email.indexOf('@'));
    }
  });

function comparePassword (password) {
  return bcrypt.compare(password, this.password);
}

UserSchema.methods.comparePassword = comparePassword;

const User = mongoose.model('User', UserSchema);

export { UserSchema, User };
