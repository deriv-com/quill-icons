import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineLgBoldIcon = (
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
      <path d='M18.063 7.688v4.687H19q.859.078.938.938-.079.858-.938.937h-3.75q-.86-.079-.937-.937.078-.86.937-.938h.938V8.977l-.625.234q-.86.195-1.211-.586-.195-.86.585-1.21l1.876-.626q.468-.117.859.156.39.274.39.742M5.836 23.977l-3.75-3.75q-.547-.665 0-1.329.664-.546 1.328 0l2.149 2.149V7.687q.078-.859.937-.937.859.078.938.938v13.359l2.148-2.149q.664-.546 1.328 0 .548.665 0 1.329l-3.75 3.75q-.664.546-1.328 0M16.813 20.5q.898-.04 1.367-.781a1.66 1.66 0 0 0 0-1.563q-.469-.742-1.367-.781-.9.04-1.368.781a1.66 1.66 0 0 0 0 1.563q.469.742 1.367.781m-.704 1.797q-1.21-.273-1.953-1.172-.742-.898-.781-2.187.04-1.446 1.016-2.422t2.422-1.016q1.445.04 2.421 1.016.977.975 1.016 2.422 0 1.288-.82 2.265l-2.188 2.695q-.625.626-1.328.157-.625-.626-.156-1.328z' />
    </g>
    <defs>
      <clipPath id='42abc9ac4f462f3ec8d22125e315522f__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineLgBoldIcon);
export default ForwardRef;
