import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4q.47.031.5.5V7q-.03.47-.5.5-.469-.03-.5-.5V4.5q.031-.469.5-.5m-8 8q.031-.469.5-.5H3q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5m12.5 0q.031-.469.5-.5h2.5q.47.031.5.5-.03.47-.5.5H13q-.469-.03-.5-.5M8 16.5q.47.031.5.5v2.5q-.03.47-.5.5-.469-.03-.5-.5V17q.031-.469.5-.5M2.344 6.344q.344-.282.719 0l1.75 1.781q.28.344 0 .688-.345.312-.688 0l-1.781-1.75q-.282-.375 0-.72m0 11.312q-.282-.343 0-.718l1.781-1.75q.344-.282.688 0 .312.344 0 .687l-1.75 1.781q-.375.282-.72 0m8.844-8.843q-.282-.345 0-.688l1.75-1.781q.375-.282.718 0 .282.343 0 .718l-1.781 1.75q-.344.282-.687 0m0 6.374q.344-.28.687 0l1.781 1.75q.282.375 0 .72-.344.28-.719 0l-1.75-1.782q-.28-.344 0-.687M10.5 12q-.03-1.406-1.25-2.156-1.25-.688-2.5 0-1.219.75-1.25 2.156.031 1.407 1.25 2.156 1.25.688 2.5 0 1.22-.75 1.25-2.156m-6 0q0-.937.469-1.75T6.25 8.969A3.44 3.44 0 0 1 8 8.5q.937 0 1.75.469t1.281 1.281q.47.813.469 1.75 0 .937-.469 1.75T9.75 15.031A3.44 3.44 0 0 1 8 15.5a3.44 3.44 0 0 1-1.75-.469 3.44 3.44 0 0 1-1.281-1.281A3.44 3.44 0 0 1 4.5 12' />
    </g>
    <defs>
      <clipPath id='8e387d1527d7be778e3b4a4305a6f79b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightMdRegularIcon);
export default ForwardRef;
