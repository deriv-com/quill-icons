import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpCaptionFillIcon = (
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
      <path d='M7.336 4.273c.61.141 1.008.727.89 1.336l-.07.258A5.7 5.7 0 0 1 7.5 7.625h3.375c.61 0 1.125.516 1.125 1.125 0 .445-.258.82-.61 1.008.258.21.422.515.422.867 0 .563-.398 1.008-.914 1.125.094.164.165.352.165.563 0 .515-.329.937-.797 1.078a.8.8 0 0 1 .046.234c0 .633-.515 1.125-1.124 1.125H6.89c-.446 0-.868-.117-1.243-.375l-.914-.586a2.29 2.29 0 0 1-.984-1.875V9.313a2.2 2.2 0 0 1 .844-1.758l.164-.14c.61-.517 1.055-1.196 1.195-1.993L6 5.164c.14-.61.727-1.008 1.336-.89M.75 8h1.5c.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 14V8.75C0 8.352.328 8 .75 8' />
    </g>
    <defs>
      <clipPath id='4985b966889cfa710e4426a271416073__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpCaptionFillIcon);
export default ForwardRef;
