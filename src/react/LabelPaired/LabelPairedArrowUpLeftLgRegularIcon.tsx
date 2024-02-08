import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 9.25h8.75q.585.039.625.625-.039.585-.625.625H3.398l10.157 10.195q.39.43 0 .86-.43.39-.86 0L2.5 11.398v7.227q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='b5683bc98597f03bbcffe218fc845d3b__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftLgRegularIcon);
export default ForwardRef;
