import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 5.375H3q-.352.023-.375.375V11H1.5V5.75q.024-.632.445-1.055Q2.368 4.274 3 4.25h9q.633.024 1.055.445.421.423.445 1.055V11h-1.125V5.75q-.023-.352-.375-.375m-9.75 8.25h10.5q.774-.047 1.055-.75H1.195q.282.703 1.055.75M0 12.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21h13.5a.73.73 0 0 1 .54.21q.21.212.21.54-.024.96-.656 1.594-.633.633-1.594.656H2.25q-.96-.024-1.594-.656Q.023 13.46 0 12.5' />
    </g>
    <defs>
      <clipPath id='78c76e4394b8dfbd485934c448b79756__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionBoldIcon);
export default ForwardRef;
