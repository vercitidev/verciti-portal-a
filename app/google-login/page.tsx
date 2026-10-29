import GoogleLogin from "./google-login";

// Compatibility route for existing production OAuth redirects.
export default function GoogleLoginCallback() {
  return <GoogleLogin client="live" />;
}
