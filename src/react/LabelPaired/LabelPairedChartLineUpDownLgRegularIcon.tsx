import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownLgRegularIcon = (
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
      <path d='M1.25 7.375v13.75C1.25 22.18 2.07 23 3.125 23h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.125C1.367 24.25 0 22.883 0 21.125V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M14.375 9.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.227l-5.82 5.82a.66.66 0 0 1-.899 0l-2.656-2.695-3.32 3.32a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898l3.75-3.75a.65.65 0 0 1 .469-.195c.156 0 .313.078.43.195l2.695 2.696 5.352-5.391zm0 11.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.227l-2.696-2.656.899-.899 2.695 2.696v-2.266c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625z' />
    </g>
    <defs>
      <clipPath id='802a6f6bbf4a41b1e81c4861f24c69d4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownLgRegularIcon);
export default ForwardRef;
