import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkMdBoldIcon = (
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
      <path d='M4.969 10.313a.7.7 0 0 1-.469.187H1.75a.246.246 0 0 0-.25.25v2.5c0 .156.094.25.25.25H4.5c.156 0 .344.094.469.219L8.5 16.813V7.219zM9.062 5c.5 0 .938.438.938.938v12.156c0 .5-.437.906-.937.906-.25 0-.47-.062-.626-.219L4.188 15H1.75C.781 15 0 14.219 0 13.25v-2.5C0 9.813.781 9 1.75 9h2.438l4.25-3.75A.87.87 0 0 1 9.062 5m4.22 4.219L15 10.938l1.719-1.72a.736.736 0 0 1 1.031 0c.313.313.313.782 0 1.063L16.031 12l1.719 1.719c.313.312.313.781 0 1.062a.684.684 0 0 1-1.031 0L15 13.062l-1.719 1.72c-.312.312-.781.312-1.062 0-.313-.282-.313-.75 0-1.063L13.938 12l-1.72-1.719c-.312-.281-.312-.75 0-1.062.282-.281.75-.281 1.063 0' />
    </g>
    <defs>
      <clipPath id='a74e280fcf2de3a19a3f83519773ca33__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkMdBoldIcon);
export default ForwardRef;
