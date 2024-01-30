import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateLgRegularIcon = (
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
      <path d='M2.695 13.742h.04q-.157.47-.665.508-.663-.079-.586-.703.704-2.97 3.047-4.844Q6.836 6.83 10 6.75q2.422.04 4.375 1.172a8.66 8.66 0 0 1 3.125 3.086V8.625q.039-.585.625-.625.585.039.625.625v3.75q-.039.585-.625.625h-3.75q-.585-.039-.625-.625.039-.585.625-.625h2.11a7.34 7.34 0 0 0-2.696-2.734Q12.11 8.039 10 8q-2.696.04-4.687 1.64-1.954 1.563-2.618 4.102m14.61 3.555v-.04q.117-.468.625-.507.664.078.586.703-.704 2.97-3.008 4.844Q13.163 24.17 10 24.25q-2.422-.04-4.375-1.172A8.76 8.76 0 0 1 2.5 20.031v2.344q-.039.585-.625.625-.547-.039-.625-.625v-3.75q.078-.585.625-.625h3.75q.585.039.625.625-.039.585-.625.625h-2.11a7.34 7.34 0 0 0 2.696 2.734Q7.89 22.961 10 23q2.696-.04 4.688-1.64 1.953-1.563 2.617-4.063' />
    </g>
    <defs>
      <clipPath id='fc3590f2853c1535d39722e5de37303e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateLgRegularIcon);
export default ForwardRef;
