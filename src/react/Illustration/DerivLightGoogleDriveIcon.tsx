import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightGoogleDriveIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 48 48'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#4185F3'
      d='M32.792 31.613H15.288L7.793 44.705c.902.458 1.926.752 2.588.752 6.886 0 20.938-.102 27.913-.102.717 0 1.389-.244 1.99-.627z'
    />
    <path
      fill='#1767D1'
      d='m7.793 44.705 7.496-13.092H.1c-.008.91.315 1.742.822 2.692 1.412 2.642 3.802 6.865 5.205 9.07.346.544 1.72 1.357 1.665 1.33'
    />
    <path
      fill='#E94235'
      d='m32.792 31.613 7.496 13.113c.971-.618 1.763-1.596 2.277-2.496a718 718 0 0 1 4.476-7.703c.63-1.065.874-2.021.858-2.915z'
    />
    <path
      fill='#30A753'
      d='m15.29 31.614 8.743-15.2-7.814-13.026c-.845.555-1.568 1.31-1.896 1.884-3.41 5.982-10.281 18.241-13.736 24.3a3.75 3.75 0 0 0-.489 2.042z'
    />
    <path
      fill='#F9BC00'
      d='m32.791 31.614-8.758-15.2 7.599-13.012c.845.557 1.773 1.296 2.1 1.87 3.411 5.982 10.282 18.241 13.738 24.3.357.624.465 1.329.43 2.042z'
    />
    <path
      fill='#0F8038'
      d='m16.218 3.39 7.815 13.025 7.599-13.013c-.785-.458-1.896-.73-2.972-.764-2.993-.1-7.846-.14-10.458-.026-.644.028-1.976.772-1.984.778'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightGoogleDriveIcon);
export default ForwardRef;
