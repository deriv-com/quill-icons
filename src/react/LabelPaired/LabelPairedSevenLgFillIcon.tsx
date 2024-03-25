import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8c0-.664.547-1.25 1.25-1.25h10c.43 0 .86.273 1.055.664.234.39.234.86 0 1.25l-8.75 15c-.352.586-1.094.781-1.72.43-.585-.352-.78-1.094-.429-1.719L9.313 9.25H1.5C.797 9.25.25 8.703.25 8' />
    </g>
    <defs>
      <clipPath id='a293e6892a47018942fcb5c0497e4828__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgFillIcon);
export default ForwardRef;
