import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.063c0-.711.574-1.313 1.313-1.313h7.875c.71 0 1.312.602 1.312 1.313v12.085c0 .356-.273.602-.629.602a.7.7 0 0 1-.328-.082L5.5 14.797l-4.32 2.871a.7.7 0 0 1-.328.082.574.574 0 0 1-.602-.602zm1.313-.438a.45.45 0 0 0-.438.438v11.593l4.129-2.761a.47.47 0 0 1 .465 0l4.156 2.761V5.063a.47.47 0 0 0-.437-.438z' />
    </g>
    <defs>
      <clipPath id='80c6ab97c2f24fabd471228684ba1fd2__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmRegularIcon);
export default ForwardRef;
