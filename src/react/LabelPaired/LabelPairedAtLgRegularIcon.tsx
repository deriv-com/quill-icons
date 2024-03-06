import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtLgRegularIcon = (
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
      <path d='M10 6.75q-2.46.04-4.414 1.21a8.2 8.2 0 0 0-3.125 3.126Q1.289 13.039 1.25 15.5q.04 2.46 1.21 4.414a8.2 8.2 0 0 0 3.126 3.125Q7.539 24.211 10 24.25q.585.039.625.625-.039.585-.625.625-2.812-.04-5.04-1.367a9.9 9.9 0 0 1-3.593-3.594Q.04 18.313 0 15.5q.04-2.812 1.367-5.04a9.9 9.9 0 0 1 3.594-3.593Q7.187 5.54 10 5.5q2.813.04 5.04 1.367a9.9 9.9 0 0 1 3.593 3.594Q19.96 12.687 20 15.5v.938q-.04 1.445-1.016 2.421-.975.977-2.422 1.016-.976 0-1.796-.508a3.2 3.2 0 0 1-1.211-1.289q-1.29 1.719-3.555 1.797-1.875-.039-3.086-1.29-1.25-1.21-1.289-3.085.039-1.875 1.29-3.086 1.21-1.25 3.085-1.289 1.875.04 3.125 1.328v-.078q.039-.585.625-.625.585.039.625.625v4.063q.039.937.625 1.562.625.585 1.563.625.937-.039 1.562-.625.585-.625.625-1.562V15.5q-.04-2.46-1.21-4.414a8.2 8.2 0 0 0-3.126-3.125Q12.461 6.789 10 6.75m3.125 8.75q-.04-1.758-1.562-2.695-1.563-.86-3.126 0-1.523.937-1.562 2.695.039 1.758 1.563 2.695 1.562.86 3.124 0 1.524-.937 1.563-2.695' />
    </g>
    <defs>
      <clipPath id='681995501ac68f4267520e9c588db18d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtLgRegularIcon);
export default ForwardRef;
