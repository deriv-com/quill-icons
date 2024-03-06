import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightLgBoldIcon = (
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
      <path d='M10.938 6.438v2.5q-.079.858-.938.937-.86-.079-.937-.937v-2.5q.078-.86.937-.938.859.078.938.938m6.132 3.32-1.758 1.758q-.663.546-1.328 0-.546-.665 0-1.328l1.758-1.758q.665-.547 1.328 0 .547.663 0 1.328M4.258 8.43l1.758 1.758q.546.663 0 1.328-.665.546-1.328 0L2.93 9.758q-.548-.665 0-1.328.663-.547 1.328 0m-3.32 6.133h2.5q.859.078.937.937-.079.859-.937.938h-2.5Q.078 16.359 0 15.5q.078-.86.938-.937m15.625 0h2.5q.858.078.937.937-.078.859-.937.938h-2.5q-.86-.079-.938-.938.078-.86.938-.937m-10.547 6.25L4.258 22.57q-.665.547-1.328 0-.548-.663 0-1.328l1.757-1.758q.665-.546 1.329 0 .546.665 0 1.328m9.297-1.329 1.757 1.758q.547.665 0 1.328-.663.547-1.328 0l-1.758-1.758q-.546-.663 0-1.328.664-.546 1.329 0m-4.376 2.578v2.5q-.078.86-.937.938-.86-.079-.937-.937v-2.5q.078-.86.937-.938.859.078.938.938M12.5 15.5q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.875 0q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 10 11.125q1.171 0 2.188.586 1.015.585 1.601 1.601t.586 2.188-.586 2.188a4.3 4.3 0 0 1-1.601 1.601 4.3 4.3 0 0 1-2.188.586q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187' />
    </g>
    <defs>
      <clipPath id='3871bd9b27694902dce2137f5f0b36b6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightLgBoldIcon);
export default ForwardRef;
