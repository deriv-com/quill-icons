import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaLgBoldIcon = (
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
      <path d='M1.875 7.688v13.75q.078.858.938.937h16.25q.858.078.937.938-.078.858-.937.937H2.813Q1.6 24.21.82 23.43q-.78-.781-.82-1.992V7.688q.078-.86.938-.938.859.078.937.938m9.297 6.64L8.75 11.906l-3.125 3.125v3.594h11.25v-3.047l-1.992-2.305-1.055 1.055a1.8 1.8 0 0 1-1.328.547q-.78 0-1.328-.547M12.5 13l1.328-1.328.235-.235q.39-.351.898-.351.547.04.898.43l2.422 2.851q.47.508.469 1.211v3.672q0 .547-.352.898-.35.352-.898.352H5q-.547 0-.898-.352-.352-.35-.352-.898v-4.219q0-.78.547-1.328l3.555-3.555q.39-.39.898-.39t.898.39l1.524 1.524z' />
    </g>
    <defs>
      <clipPath id='ba7f7ca767e1e0e78b99bc614fa85e8d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgBoldIcon);
export default ForwardRef;
