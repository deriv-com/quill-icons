import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesLgBoldIcon = (
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
      <path d='M8.125 21.75v.625l2.813-2.11a1.9 1.9 0 0 1 1.132-.39h5.43a.64.64 0 0 0 .625-.625V8c0-.312-.312-.625-.625-.625h-15A.64.64 0 0 0 1.875 8v11.25c0 .352.273.625.625.625h3.75c1.016 0 1.875.86 1.875 1.875m-.04 3.008-.194.117-.664.508c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V21.75H2.5a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5h15C18.867 5.5 20 6.633 20 8v11.25c0 1.406-1.133 2.5-2.5 2.5h-5.43l-3.945 2.969zM5.938 11.125h8.125a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H5.937C5.392 13 5 12.61 5 12.063c0-.508.39-.938.938-.938m0 3.75h4.376a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H5.937c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='8b287f870f58ab2937934962915bb660__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesLgBoldIcon);
export default ForwardRef;
