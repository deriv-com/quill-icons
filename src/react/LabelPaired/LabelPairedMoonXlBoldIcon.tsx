import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 10.64A8.28 8.28 0 0 0 2.25 18c0 4.594 3.656 8.25 8.203 8.25.61 0 1.219-.047 1.828-.187a10.5 10.5 0 0 1-7.078-9.938c0-2.016.563-3.89 1.547-5.484m2.906-3.093h1.688c.328.047.61.281.656.61a.67.67 0 0 1-.328.796c-.188.094-.328.188-.469.281l-.562.422c-.094.047-.141.094-.188.14a8.22 8.22 0 0 0-3 6.376c0 4.547 3.703 8.203 8.203 8.25h.187c.282-.047.516-.047.75-.047.141-.047.329-.047.516-.094.328-.047.657.094.797.375.14.328.094.657-.14.89-.141.142-.235.235-.375.329-.235.188-.422.375-.657.563-.093.046-.187.14-.28.187a10.48 10.48 0 0 1-6 1.875C4.686 28.5 0 23.813 0 18 0 12.469 4.266 7.969 9.656 7.547' />
    </g>
    <defs>
      <clipPath id='9190ba6ea3bc99ec5494a6c1e005f84f__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonXlBoldIcon);
export default ForwardRef;
