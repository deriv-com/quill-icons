import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeySmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.23 16.164v-2.16c0-.41.11-.793.356-1.149a2.1 2.1 0 0 1 .875-.82 9.7 9.7 0 0 1 1.941-.71 9.7 9.7 0 0 1 1.996-.22h.63l.656.082q-.083.944.328 1.805c.3.547.71 1.012 1.23 1.34v1.832zm10.172 1.395-.984-.957v-2.98a2.25 2.25 0 0 1-1.148-.794c-.301-.41-.438-.848-.438-1.367 0-.629.219-1.149.656-1.586a2.15 2.15 0 0 1 1.586-.656c.63 0 1.149.219 1.586.656s.656.984.656 1.586c0 .492-.136.902-.382 1.285-.274.356-.602.629-1.04.793l.793.82-.984.957.985.957zm-5.004-7.055c-.765 0-1.449-.274-1.996-.82a2.75 2.75 0 0 1-.82-1.996c0-.793.273-1.45.82-1.997a2.75 2.75 0 0 1 1.996-.82c.793 0 1.45.274 1.997.82.574.547.847 1.23.847 1.997 0 .765-.273 1.449-.848 1.996-.546.547-1.203.82-1.996.82m4.676 1.285c.246 0 .465-.11.602-.3a.75.75 0 0 0 0-.684c-.137-.192-.356-.328-.602-.301-.246-.027-.465.11-.601.3a.75.75 0 0 0 0 .684c.136.192.355.301.601.301' />
    </g>
    <defs>
      <clipPath id='89b3adc435aaa50188e8fcb4d90c3de2__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeySmFillIcon);
export default ForwardRef;
