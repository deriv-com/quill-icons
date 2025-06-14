import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockLgRegularIcon = (
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
      <path d='M0 7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625v13.75C1.25 22.18 2.07 23 3.125 23h10.117c.235.469.508.898.82 1.25H3.126C1.367 24.25 0 22.883 0 21.125zm3.906 8.32 3.75-3.75a.65.65 0 0 1 .469-.195c.156 0 .313.078.43.195l2.695 2.696c1.758-1.797 3.555-3.594 5.352-5.391h-2.227a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.227c-1.953 1.954-3.906 3.868-5.82 5.82a.66.66 0 0 1-.899 0c-.898-.898-1.797-1.796-2.656-2.695-1.133 1.094-2.227 2.227-3.32 3.32a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898m9.844 4.18c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m1.25 0a4.37 4.37 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m3.75-2.5c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.875h1.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.875a.617.617 0 0 1-.625-.625z' />
    </g>
    <defs>
      <clipPath id='7589d51b9bf491eac70159c848c34b28__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockLgRegularIcon);
export default ForwardRef;
