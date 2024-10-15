import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHandGestureTapRightRegularIcon = (
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
    <path d='M24.36 7.75a.42.42 0 0 0-.391.39v16.758c0 .196.195.352.39.352.196 0 .391-.156.391-.352V8.141a.42.42 0 0 0-.39-.391m-.86 6.875c0 1.328-1.016 2.383-2.305 2.5l-1.445 3.086c.04.078.117.156.156.273l.313.586c.273.547.273 1.172.039 1.72l-.235.468c-.546 1.172-1.718 1.953-2.968 1.992h-.235a3.4 3.4 0 0 1-1.68-.312l-3.007-1.446c-1.367-.625-1.953-2.265-1.29-3.633l.977-2.109c.39-.781 1.328-1.133 2.11-.742 0 0 .039.039.078.039.039.039.078.039.078.078.469-.312 1.055-.39 1.562-.156.157.039.235.117.352.195.43-.312 1.055-.39 1.602-.156.195.078.351.234.468.351l.703-1.523a2.4 2.4 0 0 1-.312-1.211c0-1.367 1.133-2.5 2.5-2.5 1.406 0 2.5 1.133 2.5 2.5zm-1.64 1.172-.235.469c.664-.235 1.094-.899 1.094-1.641 0-.937-.782-1.719-1.719-1.719-.977 0-1.758.781-1.758 1.719v.273l.117-.273c.313-.664 1.172-.977 1.836-.664s.977 1.172.664 1.836m-3.75 6.015 3.046-6.367c.117-.273 0-.625-.312-.78a.64.64 0 0 0-.782.273l-1.64 3.515c-.078.156-.235.235-.39.195-.196-.039-.313-.156-.352-.312a.82.82 0 0 0-.43-.625.75.75 0 0 0-.937.273.5.5 0 0 1-.352.157c-.117 0-.234-.078-.313-.196-.078-.117-.195-.195-.312-.273a.78.78 0 0 0-.938.195c-.078.078-.156.156-.273.156s-.234-.078-.312-.117a1 1 0 0 0-.235-.195.835.835 0 0 0-1.055.39l-.976 2.11c-.469.977-.078 2.148.898 2.617l3.008 1.406c.43.196.86.274 1.328.235l.235.039a2.8 2.8 0 0 0 2.304-1.602l.235-.43c.156-.351.117-.703-.04-1.054l-.195-.352-.508 1.055c-.078.234-.312.313-.507.195-.157-.078-.274-.312-.196-.508' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHandGestureTapRightRegularIcon);
export default ForwardRef;