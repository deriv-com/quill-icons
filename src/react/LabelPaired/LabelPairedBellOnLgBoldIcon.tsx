import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnLgBoldIcon = (
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
      <path d='M12.5 5.5q.547 0 .898.352.352.35.352.898v.703q2.187.39 3.555 1.992 1.406 1.602 1.445 3.867v1.29a7.9 7.9 0 0 0 1.719 4.882l.586.743q.312.469.117.976a.99.99 0 0 1-.86.547H4.688a.99.99 0 0 1-.859-.547 1.01 1.01 0 0 1 .117-.976l.586-.743a7.9 7.9 0 0 0 1.719-4.882v-1.29q.04-2.265 1.445-3.867 1.368-1.6 3.555-1.992V6.75q0-.547.352-.898.35-.352.898-.352m0 3.75h-.312q-1.72.04-2.891 1.172-1.133 1.172-1.172 2.89v1.29q0 2.89-1.562 5.273h11.875q-1.524-2.382-1.563-5.273v-1.29q-.04-1.718-1.172-2.89-1.172-1.133-2.89-1.172zM15 23q0 1.015-.742 1.758-.742.742-1.758.742-1.015 0-1.758-.742Q10 24.016 10 23h5M0 13.313q.078-.86.938-.938h3.125q.859.078.937.938-.079.858-.937.937H.938q-.86-.079-.938-.937m20.938-.938h3.125q.858.078.937.938-.079.858-.937.937h-3.125q-.86-.079-.938-.937.078-.86.938-.938m2.421-6.055q.313.82-.43 1.29l-2.5 1.25q-.82.311-1.25-.43-.311-.82.391-1.25l2.5-1.25q.82-.313 1.29.39M2.07 7.61q-.703-.47-.39-1.29.43-.703 1.25-.39l2.5 1.25q.702.43.43 1.25-.47.703-1.29.43z' />
    </g>
    <defs>
      <clipPath id='527b1df54097e6102d484f48ae7beb50__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnLgBoldIcon);
export default ForwardRef;
