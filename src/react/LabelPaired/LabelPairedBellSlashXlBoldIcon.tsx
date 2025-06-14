import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.781 6.281 6.938 5.39c1.078-1.64 2.765-2.858 4.781-3.233V7.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v1.219c0 2.11.703 4.172 2.016 5.86l.703.843c.234.328.328.75.187 1.078l4.125 3.281c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m8.719 6.797 10.594 8.297c-.563-1.36-.844-2.86-.844-4.406V15.75c0-2.86-2.39-5.25-5.25-5.25a5.18 5.18 0 0 0-4.5 2.578M19.031 25.5H5.625c-.469 0-.844-.234-1.031-.61-.188-.374-.14-.843.14-1.218l.704-.844c1.312-1.687 2.062-3.75 2.062-5.86v-.515l2.156 1.688c-.187 1.828-.797 3.609-1.781 5.109h8.297zM18 27c0 .797-.328 1.594-.89 2.156S15.796 30 15 30s-1.594-.281-2.156-.844S12 27.796 12 27h6' />
    </g>
    <defs>
      <clipPath id='f14ab23ede8c634968c226cff226c4fb__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashXlBoldIcon);
export default ForwardRef;
