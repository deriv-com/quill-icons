import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeCommoditiesIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='m28.627 23.107-2.386-6.467a2.004 2.004 0 0 0-1.88-1.307h-1.907L20.24 9.307A2.004 2.004 0 0 0 18.36 8h-4.734c-.84 0-1.587.52-1.88 1.307L9.52 15.333H7.614c-.84 0-1.587.52-1.88 1.307l-2.387 6.467c-.08.2-.053.426.08.613.12.173.333.28.547.28H28a.676.676 0 0 0 .547-.28.67.67 0 0 0 .08-.613ZM13.014 9.773a.661.661 0 0 1 .627-.44h4.733c.28 0 .533.174.627.44l2.053 5.56H10.96l2.053-5.56ZM16 21.413l-1.746-4.746h3.493L16 21.413ZM4.96 22.667l2.054-5.56a.661.661 0 0 1 .626-.44h4.734c.28 0 .533.173.627.44l2.053 5.56H4.96Zm12 0 2.054-5.56a.661.661 0 0 1 .627-.44h4.733c.28 0 .533.173.627.44l2.053 5.56H16.96Z'
    />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeCommoditiesIcon);
export default ForwardRef;
