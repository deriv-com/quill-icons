import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.766 20.5v.04l1.601 1.25H5.47A1.75 1.75 0 0 1 3.71 20.03c0-.43.195-.898.508-1.21l.117-.118c1.21-1.21 1.914-2.851 1.914-4.531v-.39l1.21.937a7.97 7.97 0 0 1-2.226 4.883l-.117.078A.63.63 0 0 0 5 20.03c0 .274.195.469.469.469zM11.875 6.79v-.665c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.664C16.25 7.102 18.75 9.758 18.75 13v1.172c0 1.68.664 3.32 1.875 4.531l.117.117c0 .04.04.04.078.078l-2.93-2.304a7.3 7.3 0 0 1-.39-2.422V13c0-2.734-2.266-5-5-5a4.98 4.98 0 0 0-3.594 1.523l-.976-.78a6.17 6.17 0 0 1 3.945-1.954m-.586 16.64c.195.508.664.82 1.211.82.508 0 .977-.312 1.172-.82.117-.313.469-.508.781-.39.352.116.508.468.39.82A2.49 2.49 0 0 1 12.5 25.5c-1.094 0-2.031-.664-2.383-1.64a.654.654 0 0 1 .39-.82c.313-.118.665.077.782.39M.977 5.656l23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L.234 6.633c-.273-.195-.351-.625-.117-.86.195-.273.625-.351.86-.117' />
    </g>
    <defs>
      <clipPath id='7be44403a7386210858efb234eb67f80__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashLgRegularIcon);
export default ForwardRef;
