import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.688q.078-.86.938-.938h10q.624.039.859.586.234.586-.195 1.016l-5.82 5.586h1.562q2.187.038 3.633 1.523 1.485 1.444 1.523 3.633-.04 2.187-1.523 3.633Q9.78 24.21 7.594 24.25H4.039a3.7 3.7 0 0 1-2.11-.625 4.1 4.1 0 0 1-1.523-1.602l-.039-.156q-.312-.82.39-1.25.821-.312 1.25.39l.079.157q.665 1.172 1.953 1.211h3.555q1.406-.04 2.304-.977.938-.899.977-2.304-.04-1.407-.977-2.305-.899-.937-2.304-.977H3.687q-.624-.038-.859-.585-.234-.587.195-1.016l5.82-5.586H1.189q-.86-.078-.938-.937' />
    </g>
    <defs>
      <clipPath id='0ab16e0b4d6534cbaf7704edd25f4adf__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeLgBoldIcon);
export default ForwardRef;
