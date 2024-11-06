import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 9.523c.86 0 1.563.704 1.563 1.563v2.344h.195c.586 0 1.094.351 1.367.82.117-.04.234-.04.39-.04.547 0 1.055.352 1.329.782h.234c.86 0 1.563.703 1.563 1.563v2.539c0 1.64-1.328 2.93-2.93 2.93h-3.086c-.664 0-1.29-.196-1.875-.508l-.078-.04c-1.133-.663-1.797-1.874-1.797-3.203v-.234c0-.625.234-1.21.664-1.602l.508-.468c.117-.078.234-.196.39-.274v-4.61c0-.858.665-1.562 1.563-1.562m-.39 1.563v6.836a.42.42 0 0 1-.391.39.39.39 0 0 1-.39-.39v-1.016l-.47.39c-.234.196-.312.43-.312.743v.234c0 .899.469 1.758 1.25 2.188l.039.039c.39.234.86.352 1.289.352h3.086c.937 0 1.758-.782 1.758-1.758v-2.54a.42.42 0 0 0-.39-.39.56.56 0 0 0-.274.078.62.62 0 0 1-.586.078.61.61 0 0 1-.313-.508.39.39 0 0 0-.39-.39c-.157 0-.235.039-.313.117-.156.195-.43.313-.664.195-.234-.078-.39-.273-.39-.507v-.196a.39.39 0 0 0-.391-.39c-.156 0-.235.039-.313.117-.156.195-.43.312-.664.195a.55.55 0 0 1-.39-.547v-3.32a.42.42 0 0 0-.391-.39.39.39 0 0 0-.39.39m6.874 2.305 2.11-2.11c.234-.234.234-.586 0-.781l-2.227-2.266a.65.65 0 0 0-.82 0 .65.65 0 0 0 0 .82l1.289 1.25h-3.79c-.312 0-.546.274-.546.587s.234.547.547.547h3.789l-1.133 1.132a.567.567 0 0 0 0 .82c.235.196.586.196.781 0m-13.007 0-2.07-2.11c-.235-.234-.235-.586 0-.781l2.226-2.266c.234-.195.586-.195.781 0a.566.566 0 0 1 0 .82l-1.25 1.25h3.79c.312 0 .546.274.546.587a.534.534 0 0 1-.547.547H5.664l1.133 1.132a.65.65 0 0 1 0 .82.65.65 0 0 1-.82 0' />
    </g>
    <defs>
      <clipPath id='b28c8da7b608258c7230465536846fda__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightLgBoldIcon);
export default ForwardRef;
