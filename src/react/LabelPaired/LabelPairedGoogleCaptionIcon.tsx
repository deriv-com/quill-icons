import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.719 9.64q-.047 2.532-1.547 4.079-1.524 1.546-4.078 1.594-1.617-.024-2.93-.797a5.8 5.8 0 0 1-2.086-2.086Q.304 11.117.281 9.5q.024-1.617.797-2.93a5.8 5.8 0 0 1 2.086-2.086q1.313-.772 2.93-.796 2.367.046 3.89 1.523l-1.57 1.523q-1.102-.984-2.46-.89-1.36.07-2.391 1.031-1.008.984-1.079 2.625.047 1.57 1.055 2.602 1.032 1.03 2.555 1.078 1.148-.023 1.851-.47.704-.444 1.055-1.007.329-.585.398-1.031H6.094V8.656h5.531q.094.422.094.985' />
    </g>
    <defs>
      <clipPath id='1b97a90d1d108f2a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleCaptionIcon);
export default ForwardRef;
