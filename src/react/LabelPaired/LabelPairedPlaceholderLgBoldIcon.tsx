import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 6.75h.624q.86.078.938.938-.079.858-.937.937h-.625q-.665 0-1.094.469a1.42 1.42 0 0 0-.469 1.094v.624q-.079.86-.937.938-.86-.079-.938-.937v-.626q.04-1.444 1.016-2.421.975-.977 2.422-1.016M1.188 13q.858.078.937.938v3.124q-.079.86-.937.938-.86-.078-.938-.937v-3.125q.078-.86.938-.938m15.625 0q.858.078.937.938v3.124q-.078.86-.937.938-.86-.078-.938-.937v-3.125q.078-.86.938-.938m0-1.25q-.86-.079-.938-.937v-.626q0-.663-.469-1.093a1.42 1.42 0 0 0-1.094-.469h-.624q-.86-.078-.938-.937.078-.86.938-.938h.624q1.446.04 2.422 1.016t1.016 2.422v.624q-.078.86-.937.938m.937 8.438v.625q-.04 1.445-1.016 2.421-.976.977-2.422 1.016h-.624q-.86-.079-.938-.937.078-.86.938-.938h.624q.665 0 1.094-.469.47-.429.469-1.093v-.625q.078-.86.938-.938.858.078.937.938m-15.625 0v.625q0 .663.469 1.093.428.47 1.094.469h.624q.86.078.938.938-.079.858-.937.937h-.625q-1.446-.04-2.422-1.016Q.289 22.26.25 20.812v-.625q.078-.858.938-.937.858.078.937.938m5.313 4.062q-.86-.079-.938-.937.078-.86.938-.938h3.125q.858.078.937.938-.079.858-.937.937zM6.5 7.688q.078-.86.938-.938h3.125q.858.078.937.938-.079.858-.937.937H7.437q-.859-.078-.937-.937' />
    </g>
    <defs>
      <clipPath id='04bec747700f0a71ca280c7ab7f294a8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderLgBoldIcon);
export default ForwardRef;
