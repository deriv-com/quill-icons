import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsLgRegularIcon = (
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
      <path d='M10 5.5q.585.039.625.625v1.914q2.774.274 4.688 2.149 1.875 1.913 2.148 4.687h1.914q.585.039.625.625-.039.585-.625.625h-1.914q-.273 2.774-2.148 4.688-1.915 1.875-4.688 2.148v1.914q-.039.585-.625.625-.585-.039-.625-.625v-1.914q-2.773-.273-4.687-2.148-1.875-1.914-2.149-4.688H.625Q.04 16.086 0 15.5q.039-.585.625-.625h1.914q.273-2.773 2.149-4.687 1.914-1.876 4.687-2.149V6.125Q9.414 5.54 10 5.5m-6.25 10q0 1.68.82 3.125a6.5 6.5 0 0 0 2.305 2.305q1.485.82 3.125.82a6.37 6.37 0 0 0 3.125-.82 6.5 6.5 0 0 0 2.305-2.305q.82-1.445.82-3.125t-.82-3.125a6.5 6.5 0 0 0-2.305-2.305A6.37 6.37 0 0 0 10 9.25a6.37 6.37 0 0 0-3.125.82 6.5 6.5 0 0 0-2.305 2.305 6.2 6.2 0 0 0-.82 3.125m8.75 0q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.25 0q0-1.015.508-1.875A3.759 3.759 0 0 1 10 11.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 10 19.25a3.76 3.76 0 0 1-3.242-1.875A3.6 3.6 0 0 1 6.25 15.5' />
    </g>
    <defs>
      <clipPath id='f38d9b7068b274daceaf1dc557a725d1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsLgRegularIcon);
export default ForwardRef;
