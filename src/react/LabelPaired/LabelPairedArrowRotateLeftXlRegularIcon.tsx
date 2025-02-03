import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftXlRegularIcon = (
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
      <path d='M2.25 15a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.36C4.828 9.562 8.156 7.5 12 7.5c5.766 0 10.5 4.734 10.5 10.5 0 5.813-4.734 10.5-10.5 10.5-3.75 0-7.031-1.922-8.906-4.875-.328-.516.047-1.125.656-1.125.281 0 .516.188.656.422A9.08 9.08 0 0 0 12 27c4.969 0 9-4.031 9-9s-4.031-9-9-9a9.02 9.02 0 0 0-7.828 4.5H8.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='63985d6b82b9bb2dc3ece73a4e5d9a39__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftXlRegularIcon);
export default ForwardRef;
