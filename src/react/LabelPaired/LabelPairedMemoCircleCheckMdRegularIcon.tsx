import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckMdRegularIcon = (
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
      <path d='M10 5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1h7.25c.313.375.656.719 1.031 1H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v4.219a3.5 3.5 0 0 0-1 .406V6c0-.531-.469-1-1-1M2 8.5c0-.25.219-.5.5-.5h7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7a.494.494 0 0 1-.5-.5m.5 2.5h6c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-6a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m0 3h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m11 5c1.25 0 2.375-.656 3-1.75.656-1.062.656-2.406 0-3.5-.625-1.062-1.75-1.75-3-1.75a3.5 3.5 0 0 0-3.031 1.75c-.656 1.094-.656 2.438 0 3.5A3.44 3.44 0 0 0 13.5 19m0-8c1.594 0 3.063.875 3.875 2.25a4.46 4.46 0 0 1 0 4.5A4.46 4.46 0 0 1 13.5 20a4.47 4.47 0 0 1-3.906-2.25 4.46 4.46 0 0 1 0-4.5A4.54 4.54 0 0 1 13.5 11m1.375 3.156a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719l-2.25 2.25a.53.53 0 0 1-.719 0l-1.25-1.25a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l.906.906z' />
    </g>
    <defs>
      <clipPath id='c66358017af2ccf668e1473e97d18583__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckMdRegularIcon);
export default ForwardRef;
