import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayXlFillIcon = (
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
      <path d='m3.422 7.828 13.5 8.25Q17.953 16.782 18 18q-.046 1.266-1.078 1.922l-13.5 8.25q-1.125.656-2.25.047Q.048 27.562 0 26.25V9.75q.047-1.312 1.172-1.969 1.125-.609 2.25.047' />
    </g>
    <defs>
      <clipPath id='f6e42fd8f12da507bbde0cc039998028__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlFillIcon);
export default ForwardRef;
