import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 7.688v4.375q-.078.858-.937.937H1.188q-.86-.079-.938-.937.078-.86.938-.938h3.437V7.688q.078-.86.938-.938.859.078.937.938M1.188 18h4.375q.859.078.937.938v4.375q-.078.858-.937.937-.86-.079-.938-.937v-3.438H1.188q-.86-.078-.938-.937.078-.86.938-.938M13.375 7.688v3.437h3.438q.858.078.937.938-.078.858-.937.937h-4.375q-.86-.079-.938-.937V7.687q.078-.859.938-.937.858.078.937.938M12.438 18h4.374q.86.078.938.938-.078.858-.937.937h-3.438v3.438q-.079.858-.937.937-.86-.079-.938-.937v-4.375q.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='7ad407a5ea0d2b57f9e54094fde74cc4__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressLgBoldIcon);
export default ForwardRef;
