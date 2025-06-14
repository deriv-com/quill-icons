import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.406 5.094C9.75 5.25 10 5.625 10 6v12c0 .406-.25.75-.594.938a1.01 1.01 0 0 1-1.094-.188L4.095 15H2c-1.125 0-2-.875-2-2v-2c0-1.094.875-2 2-2h2.094l4.219-3.719a1.01 1.01 0 0 1 1.093-.187m3.875 4.125L15 10.938l1.719-1.72a.736.736 0 0 1 1.031 0c.313.313.313.782 0 1.063L16.031 12l1.719 1.719c.313.312.313.781 0 1.062a.684.684 0 0 1-1.031 0L15 13.062l-1.719 1.72c-.312.312-.781.312-1.062 0-.313-.282-.313-.75 0-1.063L13.938 12l-1.72-1.719c-.312-.281-.312-.75 0-1.062.282-.281.75-.281 1.063 0' />
    </g>
    <defs>
      <clipPath id='99766988584d77c0859690a58733040d__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkMdFillIcon);
export default ForwardRef;
