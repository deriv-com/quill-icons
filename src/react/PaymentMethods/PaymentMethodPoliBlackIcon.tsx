import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPoliBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#000'>
      <path
        fillRule='evenodd'
        d='M5.868 23.729h28.806c1.032 0 1.868.833 1.868 1.861v28.82a1.864 1.864 0 0 1-1.868 1.861H5.868A1.86 1.86 0 0 1 4 54.41V25.59c0-1.028.836-1.861 1.868-1.861M17.472 29.2h.003l-.003-.004zm-5.56 3.914a10.84 10.84 0 0 1 5.56-3.914l.01 20.745a10.836 10.836 0 0 1-5.57-16.83m7.936-4.344q.372-.03.748-.03a10.83 10.83 0 1 1 .01 21.66h-.228V43.34a6.742 6.742 0 1 0-.53-13.46zM59.205 50.924v-21.24h5.51q.556 0 1.093-.003c1.595-.007 3.008-.014 3.797.13.967.172 2.236.641 2.887 1.058.885.537 1.549 1.34 2.018 2.401.465 1.058.683 2.327.683 3.795 0 2.424-.52 4.321-1.803 5.577-1.282 1.26-4.11 1.797-6.58 1.797h-1.409v6.485zm6.16-10.38c.076.012.093.012.256.02l.037.002c1.92.072 2.421-.407 2.724-.768.455-.56.465-1.816.465-2.98v-.125c.002-.91.003-1.666-.664-2.391-.455-.501-1.581-.664-2.818-.664l.013.351v6.554z'
        clipRule='evenodd'
      />
      <path d='M115.568 51.12h-13.941V29.83h6.87v14.908h7.071zM116.883 51.188H124V36.951h-7.117zM116.883 35.607H124V29.83h-7.117zM95.213 47.696c-.758.687-1.63 1.36-2.515 1.676 3.423-2.128 7.126-6.232 6.394-11.881-.42-3.547-2.457-5.845-5.145-7.16q-.008 0-.027-.007a.3.3 0 0 0-.07-.015c2.47 1.767 4.88 4.016 4.985 7.917.094 3.613-1.337 6.22-3.202 8.282-1.513 1.676-3.586 2.981-5.763 3.456 2.945-1.025 5.564-2.922 7.172-5.613a10.8 10.8 0 0 0 1.54-4.458c.533-4.576-1.937-7.524-4.882-9.096 1.689 1.185 3.4 2.655 4.146 4.797.803 2.32.51 5.288-.475 7.397-1.738 3.667-5.324 6.973-10.707 6.81 3.437-.032 6.138-1.35 8.13-3.41 1.877-1.933 3.576-4.692 3.309-8.396-.153-2.063-1.061-3.716-2.18-4.927-.661-.735-1.478-1.386-2.409-1.724 2.223 1.724 4.039 3.283 4.286 6.534.277 3.6-1.13 6.089-2.912 8.07-1.468 1.631-4.205 3.144-7.231 3.31l-.196.009c-.932.042-1.977.09-2.88-.27 6.649 1.098 11.81-3.084 12.845-8.232.898-4.426-1.36-7.547-4.087-8.966.133.116.227.206.312.287s.16.153.257.234c1.91 1.656 3.915 3.964 3.31 7.875-.853 5.441-6.779 10.157-13.115 8.175 3.843.99 7.247-.28 9.655-2.411 2.005-1.758 3.645-4.4 3.307-7.964-.257-2.714-2.024-4.61-3.88-5.555 1.797 1.49 3.379 2.923 3.567 5.715.231 3.472-1.178 5.802-3.098 7.55-2.655 2.408-7.64 3.817-10.856 1.36 3.775 2.294 8.63.654 11.123-1.839 1.562-1.562 2.782-4.006 2.678-6.498-.117-2.874-1.698-4.426-3.55-5.835l.206.208c1.678 1.697 3.343 3.38 2.986 6.84-.423 3.993-3.856 7.205-7.712 7.81-2.714.433-5.288-.465-6.662-2.2 1.445 1.351 3.134 2.285 5.871 2.096 4.182-.28 8.162-3.957 8.34-8.129.115-2.85-1.633-4.61-3.286-5.939.214.247.433.482.648.713.955 1.026 1.854 1.99 2.112 3.703a7.8 7.8 0 0 1 0 2.155c-.267 1.793-1.273 3.527-2.575 4.774-1.269 1.223-2.993 2.222-5.03 2.362-2.598.176-4.882-.826-6.184-2.724a7.15 7.15 0 0 0 5.51 2.575c3.996-.023 7.803-3.391 8.129-7.443.208-2.597-1.377-4.331-2.831-5.298 1.558 1.27 2.782 3.202 2.304 5.975-.583 3.423-3.876 6.414-7.755 6.391-3.844-.02-6.509-3.085-5.822-7.081.56-3.27 3.27-5.61 6.499-6.183-.013.154-.044.358-.077.573-.028.176-.056.361-.076.533q.581-.316 1.162-.635c1.486-.814 2.974-1.63 4.497-2.404q-.669-.662-1.318-1.298l-.004-.004c-1.112-1.092-2.164-2.126-3.078-3.098-.039.198-.103.478-.17.768v.004l-.001.005c-.034.145-.068.293-.099.434-3.856.267-6.613 1.978-8.803 4.25-2.017 2.096-3.53 4.797-3.775 8.188a10.3 10.3 0 0 0 0 1.675c.42 5.38 4.393 8.885 9.867 9.34.417.033.963.033 1.312 0a14.66 14.66 0 0 0 8.819-3.983 12.99 12.99 0 0 0 4.084-8.757c.237-3.75-1.452-6.58-3.352-8.188-.768-.65-1.686-1.27-2.727-1.572 3.137 1.797 5.825 4.53 5.825 9.281 0 3.378-1.455 6.08-3.04 7.98-.556.673-1.139 1.36-1.887 1.734 2.389-2.131 4.8-5.23 4.719-9.76-.059-3.413-1.527-5.83-3.46-7.393l-.023-.019c-.67-.544-1.373-1.115-2.235-1.299 3.004 1.69 5.262 4.39 5.45 8.608.173 4.006-2.062 7.299-4.194 9.235M46.917 23.729V56.27h1.627V23.73z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPoliBlackIcon);
export default ForwardRef;