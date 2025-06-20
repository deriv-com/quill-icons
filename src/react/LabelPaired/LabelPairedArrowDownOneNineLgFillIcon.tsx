import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.828 6.984c.352.274.547.625.547 1.016v3.75H19c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625V9.758l-.234.078c-.664.195-1.368-.156-1.602-.781-.195-.664.156-1.367.781-1.602l1.875-.625c.39-.117.82-.078 1.133.156M6.5 24.25c-.352 0-.703-.117-.937-.39l-3.438-3.75a1.24 1.24 0 0 1 .078-1.758 1.24 1.24 0 0 1 1.758.078l1.289 1.367V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v11.797L9 18.43a1.24 1.24 0 0 1 1.758-.078 1.24 1.24 0 0 1 .078 1.757l-3.438 3.75c-.234.274-.546.391-.898.391m10.078-6.758c-.625.313-.898 1.055-.586 1.68a1.2 1.2 0 0 0 1.64.586 1.2 1.2 0 0 0 .587-1.64c-.274-.626-1.016-.9-1.64-.626m-.508 4.414a3.36 3.36 0 0 1-2.383-3.242 3.42 3.42 0 0 1 3.438-3.437 3.443 3.443 0 0 1 3.438 3.437c0 .898-.313 1.797-.86 2.54L17.79 23.78a1.2 1.2 0 0 1-1.719.235c-.586-.391-.703-1.172-.273-1.758z' />
    </g>
    <defs>
      <clipPath id='12c9115e67435f98f07baaa2018e4aa1__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineLgFillIcon);
export default ForwardRef;
