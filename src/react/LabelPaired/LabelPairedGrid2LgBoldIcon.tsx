import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2LgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.125 8.625v3.75h3.75v-3.75zm-1.875 0q.039-.781.547-1.328.546-.508 1.328-.547h3.75q.781.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm1.875 10v3.75h3.75v-3.75zm-1.875 0q.039-.78.547-1.328.546-.508 1.328-.547h3.75q.781.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm15.625-10h-3.75v3.75h3.75zm-3.75-1.875h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-3.75q.039-.781.547-1.328.546-.508 1.328-.547m0 11.875v3.75h3.75v-3.75zm-1.875 0q.039-.78.547-1.328.546-.508 1.328-.547h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
    </g>
    <defs>
      <clipPath id='23fc88a97c40cbb11a59ac347fc12f6f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2LgBoldIcon);
export default ForwardRef;
