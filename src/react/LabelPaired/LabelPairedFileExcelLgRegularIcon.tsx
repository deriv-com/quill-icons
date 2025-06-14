import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 24.25c.664 0 1.25-.547 1.25-1.25V13H9.375A1.85 1.85 0 0 1 7.5 11.125V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25zm-3.125-12.5h4.336c-.04-.078-.078-.195-.156-.273L9.023 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625M2.5 5.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m3.32 9.648L7.5 17.57l1.64-2.422c.235-.273.626-.351.9-.156a.665.665 0 0 1 .155.899l-1.953 2.734 1.953 2.773c.196.313.117.665-.156.899-.312.195-.664.117-.898-.156L7.5 19.719 5.82 22.14a.665.665 0 0 1-.898.156c-.274-.235-.352-.625-.156-.899l1.953-2.773-1.953-2.734a.665.665 0 0 1 .156-.899.665.665 0 0 1 .898.156' />
    </g>
    <defs>
      <clipPath id='ffaebcb150f0c3660cfe2109bb958f5f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelLgRegularIcon);
export default ForwardRef;
