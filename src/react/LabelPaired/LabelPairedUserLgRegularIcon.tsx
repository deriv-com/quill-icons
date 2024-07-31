import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 10.5c0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0C5.953 7.96 5.25 9.172 5.25 10.5c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281M4 10.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297 0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 4 10.5M1.5 24.25h15c-.078-3.086-2.617-5.625-5.742-5.625H7.203c-3.125 0-5.664 2.54-5.703 5.625m-1.25.117c0-3.867 3.086-6.992 6.953-6.992h3.555a6.985 6.985 0 0 1 6.992 6.992c0 .625-.547 1.133-1.172 1.133H1.383A1.134 1.134 0 0 1 .25 24.367' />
    </g>
    <defs>
      <clipPath id='26a15291a69f410ef13066729e4a650d__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserLgRegularIcon);
export default ForwardRef;
