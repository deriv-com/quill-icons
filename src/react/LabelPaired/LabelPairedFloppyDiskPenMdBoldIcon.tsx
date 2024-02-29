import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenMdBoldIcon = (
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
      <path d='M1.5 7v10q.031.47.5.5h6.469L8.094 19H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5h7.688q.812 0 1.406.594l2.312 2.312-1.062 1.063-2.313-2.313L10 6.625V9.75q-.063.687-.75.75h-6q-.687-.063-.75-.75V6.5H2q-.469.031-.5.5m11.906.906Q14 8.5 14 9.344v2.031l-1.5 1.5V9.344a.51.51 0 0 0-.156-.375zM4 6.5V9h4.5V6.5zM5 14q.03-1.125 1-1.719 1-.562 2 0 .97.594 1 1.719-.03 1.125-1 1.719-1 .563-2 0-.97-.594-1-1.719m12.188-2.625.437.438q.375.406.375.874 0 .5-.375.907l-.906.906-2.219-2.219.906-.906q.407-.375.875-.375.5 0 .907.375M9.75 17.031 13.781 13 16 15.219l-4.031 4.031a1.2 1.2 0 0 1-.469.281L9.625 20a.54.54 0 0 1-.469-.156.54.54 0 0 1-.156-.469l.469-1.875q.093-.281.281-.469' />
    </g>
    <defs>
      <clipPath id='13a9574ce3654bdfc010fbbf3251c720__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenMdBoldIcon);
export default ForwardRef;
