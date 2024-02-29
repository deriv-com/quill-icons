import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserLgRegularIcon = (
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
      <path d='M16.094 21.79a8.8 8.8 0 0 0 1.953-2.813q.703-1.602.703-3.477-.04-2.46-1.21-4.414a8.2 8.2 0 0 0-3.126-3.125Q12.461 6.789 10 6.75q-2.46.04-4.414 1.21a8.2 8.2 0 0 0-3.125 3.126Q1.289 13.039 1.25 15.5q0 1.875.703 3.477a8.8 8.8 0 0 0 1.953 2.812q.43-1.68 1.758-2.734Q6.954 18.039 8.75 18h2.5q1.797.04 3.086 1.055 1.327 1.054 1.758 2.734M15 22.687q-.156-1.485-1.21-2.422-1.017-.977-2.54-1.016h-2.5q-1.524.04-2.54 1.016-1.053.937-1.21 2.422 2.187 1.523 5 1.562 2.813-.04 5-1.562M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m0-10q1.055-.039 1.64-.937.47-.938 0-1.876-.585-.898-1.64-.937-1.055.038-1.64.938-.47.937 0 1.874.585.9 1.64.938m-3.125-1.875q.039-1.758 1.563-2.695 1.562-.86 3.124 0 1.524.937 1.563 2.695-.04 1.758-1.562 2.695-1.563.86-3.126 0-1.523-.937-1.562-2.695' />
    </g>
    <defs>
      <clipPath id='3a4fde08b6368fccee371b887c1e5302__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserLgRegularIcon);
export default ForwardRef;
