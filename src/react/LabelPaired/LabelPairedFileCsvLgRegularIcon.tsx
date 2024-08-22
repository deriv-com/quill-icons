import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvLgRegularIcon = (
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
      <path d='M2.5 24.25h1.25v1.25H2.5A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328v4.844h-1.25V13H9.375A1.85 1.85 0 0 1 7.5 11.125V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25m11.21-12.5c-.038-.078-.077-.195-.155-.273L9.023 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zm-5.898 7.5h.625c.86 0 1.563.703 1.563 1.563v.312a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.312a.336.336 0 0 0-.312-.313h-.626a.31.31 0 0 0-.312.313v3.125c0 .195.117.312.313.312h.625a.31.31 0 0 0 .312-.312v-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.313c0 .898-.703 1.562-1.562 1.562h-.626c-.898 0-1.562-.664-1.562-1.562v-3.125c0-.86.664-1.563 1.563-1.563m5.196 0h1.367c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.367c-.313 0-.508.234-.508.547 0 .195.117.351.273.469l1.485.625a1.8 1.8 0 0 1 1.055 1.601c0 .977-.82 1.758-1.797 1.758h-1.641a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.64c.313 0 .547-.195.547-.508a.51.51 0 0 0-.312-.469l-1.484-.625c-.625-.273-1.016-.937-1.016-1.601 0-.977.781-1.797 1.758-1.797m3.867 0c.313 0 .625.313.625.625v1.25c0 .898.195 1.797.625 2.578.39-.781.625-1.68.625-2.578v-1.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.25c0 1.367-.43 2.695-1.172 3.828l-.195.274a.57.57 0 0 1-.508.273c-.234 0-.43-.078-.547-.273l-.195-.274a6.97 6.97 0 0 1-1.133-3.828v-1.25c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='1a615f45b6b84a7e51897e1199b07959__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvLgRegularIcon);
export default ForwardRef;
