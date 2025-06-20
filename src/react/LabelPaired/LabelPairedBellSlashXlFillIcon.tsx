import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashXlFillIcon = (
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
      <path d='m1.781 6.281 6.938 5.39c1.078-1.64 2.765-2.858 4.781-3.233V7.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v.89c0 2.204.797 4.36 2.25 6l.328.376c.422.468.516 1.078.281 1.64 0 0-.047 0-.047.047l4.22 3.328c.515.375.609 1.078.187 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188M19.031 25.5H6c-.61 0-1.172-.328-1.406-.844a1.52 1.52 0 0 1 .281-1.64l.328-.375C6.656 21 7.5 18.844 7.5 16.64v-.188zm-1.922 3.656C16.547 29.72 15.797 30 15 30s-1.594-.281-2.156-.844S12 27.796 12 27h6c0 .797-.328 1.594-.89 2.156' />
    </g>
    <defs>
      <clipPath id='fca9be628737944c96f09d4577a04ef2__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashXlFillIcon);
export default ForwardRef;
