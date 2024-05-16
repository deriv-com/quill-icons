import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9.75 12h-.047c-.515 0-.984.422-1.078.938l-.75 4.124c-.047.329 0 .61.188.891.187.235.468.375.796.422l4.079.469c.75.093 1.312.703 1.312 1.453 0 .797-.656 1.453-1.5 1.453h-1.687a1.65 1.65 0 0 1-1.36-.703l-.187-.281c-.328-.516-1.032-.657-1.547-.328-.516.375-.657 1.078-.282 1.593l.188.282C8.578 23.39 9.797 24 11.063 24h1.687c2.063 0 3.75-1.64 3.75-3.703 0-1.875-1.453-3.469-3.328-3.703l-2.86-.328.376-2.016h3.937a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 14.625 12z' />
    </g>
    <defs>
      <clipPath id='6ee454a8cb69104f82de53f82ec3a7b4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveXlFillIcon);
export default ForwardRef;
