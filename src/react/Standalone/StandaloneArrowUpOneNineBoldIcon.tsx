import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpOneNineBoldIcon = (
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
    <path d='M22.563 8.688v4.687h.937a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-3.75c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938h.938v-3.36l-.665.196c-.468.156-1.015-.078-1.171-.586s.078-1.016.585-1.172l1.875-.625c.274-.117.586-.078.86.117.234.157.39.47.39.742m-12.227-.665a.92.92 0 0 1 1.289 0l3.75 3.75c.39.391.39.977 0 1.329a.856.856 0 0 1-1.29 0l-2.148-2.149v13.36c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937v-13.36l-2.149 2.149c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.29l3.75-3.75zm10.977 10.352c-.586 0-1.094.313-1.368.781-.273.508-.273 1.094 0 1.563.274.508.782.781 1.367.781.547 0 1.055-.273 1.329-.781.273-.469.273-1.055 0-1.563a1.56 1.56 0 0 0-1.328-.781m-.704 4.96c-1.562-.35-2.734-1.718-2.734-3.398a3.443 3.443 0 0 1 3.438-3.437c1.875 0 3.437 1.563 3.437 3.438 0 .859-.312 1.64-.82 2.265l-2.227 2.735c-.312.39-.898.43-1.328.117-.39-.313-.43-.899-.117-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpOneNineBoldIcon);
export default ForwardRef;
