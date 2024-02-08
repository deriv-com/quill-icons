import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 7.375q-.586.039-.625.625v15q.039.585.625.625h8.594a7.1 7.1 0 0 0 1.797 1.836q-.195.039-.391.039h-10q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5h10q1.055.039 1.758.742T15.25 8v5.273a6.1 6.1 0 0 0-1.875.86V8q-.039-.585-.625-.625zM4.938 10.5h5.625q.858.078.937.938-.079.858-.937.937H4.937q-.859-.079-.937-.937.078-.86.938-.938m0 3.75h5.625q.858.078.937.938-.079.858-.937.937H4.937q-.859-.078-.937-.937.078-.86.938-.938m0 3.75h1.875q.859.078.937.938-.078.858-.937.937H4.938q-.86-.078-.938-.937.078-.86.938-.938m17.812 1.875a5.54 5.54 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.7 5.7 0 0 1-2.813.742 5.7 5.7 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07 5.54 5.54 0 0 1-.743-2.813q0-1.524.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.7 5.7 0 0 1 2.813-.743q1.485 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07q.742 1.29.742 2.813m-3.008-1.68q-.43-.39-.86 0L16.5 20.54l-1.133-1.094q-.43-.39-.86 0-.39.43 0 .86l1.563 1.562q.43.39.86 0l2.812-2.812q.39-.43 0-.86' />
    </g>
    <defs>
      <clipPath id='d89c63b0821ad0ac0bbebd7d4df4aa27__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckLgBoldIcon);
export default ForwardRef;
