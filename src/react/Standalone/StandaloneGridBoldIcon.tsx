import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGridBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M10.688 9.313H8.812v1.874h1.876zM8.812 7.75h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.812c-.898 0-1.562-.664-1.562-1.562V9.312c0-.859.664-1.562 1.563-1.562m1.876 7.813H8.812v1.874h1.876zM8.812 14h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.812c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563m0 7.813v1.875h1.876v-1.875zm-1.562 0c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.875c0 .898-.703 1.562-1.562 1.562H8.812c-.898 0-1.562-.664-1.562-1.562zm9.688-12.5h-1.875v1.874h1.874zM15.063 7.75h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562V9.312c0-.859.664-1.562 1.563-1.562m0 7.813v1.874h1.874v-1.875zm-1.563 0c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562zm3.438 6.25h-1.875v1.875h1.874zm-1.875-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.875c0 .898-.703 1.562-1.562 1.562h-1.875c-.899 0-1.563-.664-1.563-1.562v-1.875c0-.86.664-1.563 1.563-1.563m6.25-10.937v1.874h1.875V9.314zm-1.563 0c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562zm3.438 6.25h-1.875v1.874h1.875zM21.313 14h1.875c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562v-1.875c0-.86.664-1.563 1.563-1.563m0 7.813v1.875h1.875v-1.875zm-1.563 0c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563v1.875c0 .898-.703 1.562-1.562 1.562h-1.875c-.899 0-1.563-.664-1.563-1.562z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGridBoldIcon);
export default ForwardRef;
