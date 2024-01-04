import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenLineXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M20.156 7.875c-.531-.438-1.062-.438-1.593 0l-2.579 2.531 3.61 3.61 2.531-2.579c.438-.53.438-1.062 0-1.593l-1.969-1.969ZM3.891 22.5a3.43 3.43 0 0 0-.75 1.313l-1.266 4.312 4.313-1.266c.5-.156.937-.406 1.312-.75l11.016-11.015-3.61-3.61L3.891 22.5ZM17.484 6.797c.532-.5 1.157-.75 1.875-.75.688 0 1.297.25 1.828.75l2.016 2.016c.5.53.75 1.14.75 1.828 0 .718-.25 1.343-.75 1.875L8.531 27.187a4.44 4.44 0 0 1-1.875 1.125L.984 29.953c-.312.094-.562.031-.75-.187-.218-.188-.28-.422-.187-.703l1.64-5.672c.22-.75.61-1.391 1.172-1.922L17.484 6.797ZM11.25 28.5h15c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-15c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlRegularIcon);
export default ForwardRef;
