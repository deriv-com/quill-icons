import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationLgRegularIcon = (
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
      <path d='M1.367 21.906a.75.75 0 0 0-.117.39q.078.666.703.704h16.094q.624-.039.703-.703 0-.195-.078-.39L10.82 8.468Q10.508 7.999 10 8q-.508 0-.781.469zm-1.094-.625L8.125 7.844Q8.79 6.789 10 6.75q1.21.038 1.875 1.094l7.852 13.437q.273.469.273 1.016-.039.82-.586 1.367t-1.367.586H1.953q-.82-.039-1.367-.586T0 22.297q0-.547.273-1.016M10 11.75q.585.039.625.625v5q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625m-.937 8.75q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938' />
    </g>
    <defs>
      <clipPath id='51f942074ddf25618092945f57509042__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgRegularIcon);
export default ForwardRef;
