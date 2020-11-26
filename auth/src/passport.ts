import passport from 'passport';
import { User } from './models/user';

//@ts-ignore
passport.serializeUser(User.serializeUser());

//@ts-ignore
passport.deserializeUser(User.deserializeUser());

// @ts-ignore
passport.use(User.createStrategy());

// export function createNewUser({ emails, googleId, displayName, photos }: UserAttrs) {
//     const newUser = User.build({ emails, googleId, displayName, photos });
//     return newUser.save();
// }

export { passport };

// passport.use('google', new GoogleStrategy(options, async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
//     const emails = (profile.emails || []).map((email) => email.value);
//     const googleId = profile.id;
//     const displayName = profile.displayName;
//     const photos = (profile.photos || []).map(({value}) => value);
//
//     const existUser = await User.findOne({ googleId });
//
//     if (existUser) {
//         return done(undefined, {
//             id: existUser.id,
//             emails: existUser.emails,
//             googleId: existUser.googleId,
//             displayName: existUser.displayName,
//             photos: existUser.photos,
//         });
//     }
//
//     const savedNewUser = await createNewUser({ emails, googleId, displayName, photos });
//
//     done(undefined, { id: savedNewUser.id, emails, googleId });
// }));
//
// export function createNewUser({ emails, googleId, displayName, photos }: UserAttrs) {
//     const newUser = User.build({ emails, googleId, displayName, photos });
//     return newUser.save();
// }
//
// export { passport };
