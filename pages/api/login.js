import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    // check to see if a user exists with the provided email
    // if not, return an error
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(404).send('No user exists with the provided email');
    }
    // check to see if users' password matches the one in database
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // if so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });
      // send that token to the client
      res.status(200).json(token);
    } else {
      res.status(401).send('Passwords do not match'); // Not authenticated
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Error logging in user');
  }
};
