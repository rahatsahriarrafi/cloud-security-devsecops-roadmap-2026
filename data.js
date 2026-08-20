window.ROADMAP = {
  "meta": {
    "brand": "CloudSec Path",
    "year": "2026",
    "tagline": "A lab-first route from foundations to CNAPP, supply chain, and AI-system security.",
    "duration": "14–18 months FTE",
    "phases": 10,
    "detailLevel": "expanded"
  },
  "trends": [
    {
      "trend": "CNAPP consolidation",
      "why": "Security teams merge CSPM, CWPP, CIEM, and IaC scanning into one risk graph so toxic combinations (public + admin + secret) surface faster than siloed tickets."
    },
    {
      "trend": "ASPM & owner-centric AppSec",
      "why": "Findings are routed to service owners with SLAs; scanners without ownership models create backlog theater."
    },
    {
      "trend": "Software supply chain attestations",
      "why": "Buyers and platforms expect SBOM + provenance (Sigstore/SLSA) as release gates, not optional PDF attachments."
    },
    {
      "trend": "Workload identity everywhere",
      "why": "Static cloud keys in CI/CD are treated as incidents; OIDC federation and short-lived tokens are the default."
    },
    {
      "trend": "AI / agent security",
      "why": "LLM apps, RAG stores, and coding agents expand prompt injection, data exfil, and tool-abuse risk into the SDLC."
    },
    {
      "trend": "eBPF runtime visibility",
      "why": "Container and host runtime detection moves into the kernel for lower overhead and richer process/network context."
    },
    {
      "trend": "Platform paved roads",
      "why": "DevSecOps success is measured by secure-by-default golden paths, not by the number of blocked pipelines."
    },
    {
      "trend": "Identity as the perimeter",
      "why": "Zero Trust + JIT privileged access replaces long-lived VPN and standing admin roles as the primary control story."
    }
  ],
  "rhythm": [
    [
      "Mon–Tue",
      "Deep study: official docs + one framework paper; write 10 flashcards or Anki cards"
    ],
    [
      "Wed",
      "Hands-on lab in cloud / local cluster; capture screenshots and commands in a lab notes repo"
    ],
    [
      "Thu",
      "Encode learning: Terraform/policy/pipeline change; open a PR even if only to yourself"
    ],
    [
      "Fri",
      "Write-up: architecture diagram, controls matrix, what broke, what you would automate next"
    ],
    [
      "Weekend (2–4h)",
      "Optional: TryHackMe/HTB cloud rooms, cert practice exams, or contribute one Semgrep/Kyverno rule"
    ]
  ],
  "skills": [
    {
      "domain": "Cloud IAM",
      "junior": "Apply managed policies safely; enable MFA; avoid wildcards on *",
      "mid": "Design least privilege with conditions/tags; federate IdP; use Access Analyzer",
      "senior": "Org-wide identity architecture, JIT/PAM, break-glass design, CIEM program"
    },
    {
      "domain": "IaC security",
      "junior": "Run Checkov/tfsec and fix Critical/High findings",
      "mid": "Custom policies, module standards, PR comments that teach",
      "senior": "Platform paved-road modules with policy-as-code and exception governance"
    },
    {
      "domain": "CI/CD security",
      "junior": "Add SAST/SCA/secrets scanners to a pipeline",
      "mid": "OIDC to cloud, image signing, severity gates + waivers",
      "senior": "SLSA/provenance program, poisoned-pipeline threat model, org workflow standards"
    },
    {
      "domain": "Kubernetes",
      "junior": "PSS restricted + basic NetworkPolicy + non-root",
      "mid": "Admission (Kyverno/Gatekeeper), signed images, Falco triage",
      "senior": "Multi-tenant isolation, GitOps trust model, runtime + network mesh strategy"
    },
    {
      "domain": "Detection",
      "junior": "Triage native findings (GuardDuty/Defender/SCC)",
      "mid": "Custom detections + runbooks + tabletop drills",
      "senior": "Detection-as-code library, ATT&CK coverage map, SOC metrics (MTTD/MTTR)"
    },
    {
      "domain": "Governance",
      "junior": "Map controls to CIS / NIST CSF language",
      "mid": "Automate evidence collection; ticket exceptions with expiry",
      "senior": "Risk framework, control owners, board-ready posture narrative"
    },
    {
      "domain": "AppSec / ASPM",
      "junior": "Triage SAST/SCA tickets with developer empathy",
      "mid": "Threat model in sprints; reduce false positives; track fix SLA",
      "senior": "ASPM operating model tying findings to services, owners, and business risk"
    },
    {
      "domain": "AI system security",
      "junior": "List OWASP LLM Top 10 risks for a chatbot",
      "mid": "Threat-model RAG + tools; add guardrails and logging",
      "senior": "Org AI usage policy, model/data governance, agent egress controls"
    }
  ],
  "phases": [
    {
      "id": "foundations",
      "order": 0,
      "title": "Foundations",
      "duration": "4–6 weeks",
      "goal": "Build the operating-system, networking, crypto, and security literacy every cloud control rests on — so later phases are application, not memorization.",
      "outcomes": [
        "Explain CIA triad, threat vs vulnerability vs risk, likelihood×impact, and the shared-responsibility model for IaaS/PaaS/SaaS",
        "Trace a packet path (client → DNS → TLS → HTTP → app) and name where controls can sit",
        "Operate Linux: users, permissions, processes, systemd, journals, basic networking tools",
        "Map OWASP Top 10 categories to concrete failure modes and at least one mitigation each",
        "Produce a one-page STRIDE threat model for a simple 3-tier web app"
      ],
      "weekPlan": [
        {
          "week": "Week 1",
          "focus": "Security vocabulary + risk",
          "tasks": [
            "CIA/AAA, authn vs authz, non-repudiation",
            "Asset inventory mindset; attack surface vs attack path",
            "Read NIST CSF 2.0 functions at a high level",
            "Write definitions in your own words (no copy-paste)"
          ]
        },
        {
          "week": "Week 2",
          "focus": "Networking essentials",
          "tasks": [
            "OSI vs TCP/IP; ports; TCP handshake",
            "DNS recursion vs authority; common record types",
            "Firewalls, NAT, VPN vs ZTNA conceptual contrast",
            "Capture HTTP vs HTTPS with browser/devtools + openssl s_client"
          ]
        },
        {
          "week": "Week 3",
          "focus": "Linux operations",
          "tasks": [
            "Users/groups, sudoers, file modes, sticky bit",
            "systemd units, journalctl, process signals",
            "ssh keys, agent forwarding risks, known_hosts",
            "Write a 30-line bash triage script (disk, mem, listeners)"
          ]
        },
        {
          "week": "Week 4",
          "focus": "Crypto + app sec literacy",
          "tasks": [
            "Hash vs MAC vs signature; symmetric vs asymmetric",
            "X.509 chain of trust; what a CSR is",
            "OWASP Top 10 walkthrough with examples",
            "Draft STRIDE on a sample SaaS diagram"
          ]
        },
        {
          "week": "Week 5–6 (buffer)",
          "focus": "Consolidation labs",
          "tasks": [
            "Hardened Ubuntu lab + TLS lab",
            "Re-do threat model after peer/self critique",
            "Optional: Security+ domain skim if cert-bound"
          ]
        }
      ],
      "topics": [
        {
          "title": "Security fundamentals",
          "depth": "Must know",
          "items": [
            "CIA triad and security properties: confidentiality, integrity, availability, authenticity, accountability",
            "Threat, vulnerability, exploit, risk; qualitative vs simple quantitative scoring",
            "Controls: preventive, detective, corrective, compensating; defense in depth",
            "Identity basics: authentication factors, session management, least privilege, separation of duties",
            "Compliance literacy (not expertise yet): ISO 27001, SOC 2 Trust Services, NIST CSF, CIS Controls",
            "Shared responsibility: what you own in EC2/VM vs managed DB vs SaaS IdP"
          ]
        },
        {
          "title": "Networking",
          "depth": "Must know",
          "items": [
            "IPv4 addressing, subnets/CIDR intuition, private ranges, DNS resolution path",
            "TCP vs UDP; common ports (22, 53, 80, 443, 3389, 5432, 6379) and why exposure matters",
            "TLS 1.2/1.3 handshake outline; certificates; HSTS; certificate pinning caveats",
            "HTTP methods, status codes, cookies, CORS high-level risks",
            "Load balancers, reverse proxies, WAF placement; east-west vs north-south traffic",
            "VPN (site-to-site / client) vs Zero Trust Network Access mental model"
          ]
        },
        {
          "title": "Linux & shell",
          "depth": "Must know",
          "items": [
            "Filesystem layout, permissions, SUID/SGID risks, umask",
            "Processes, nice, systemd targets, timers, journald",
            "Package managers; verifying downloads (checksums/signatures) conceptually",
            "Networking tools: ss, dig, curl, traceroute; reading /var/log",
            "Bash: variables, pipes, exit codes, simple functions for automation stubs",
            "SSH hardening concepts: key-only, DisableRoot, AllowUsers, fail2ban idea"
          ]
        },
        {
          "title": "Cryptography essentials",
          "depth": "Working knowledge",
          "items": [
            "Randomness vs keys; key length intuition; why you do not invent crypto",
            "AES-GCM vs CBC pitfalls at a conceptual level; AEAD preference",
            "RSA/ECDSA for signatures; Diffie-Hellman intuition for key exchange",
            "Password storage: salted hashing, Argon2/bcrypt intuition; never reversible encryption for passwords",
            "KMS / HSM concept: you call APIs, keys stay in the boundary",
            "mTLS: mutual authentication for service-to-service"
          ]
        },
        {
          "title": "Application security literacy",
          "depth": "Working knowledge",
          "items": [
            "OWASP Top 10: injection, broken auth/access, SSRF, insecure design, misconfig, vulnerable components",
            "ASVS as a requirements checklist (skim, do not memorize)",
            "Input validation vs output encoding; parameterized queries",
            "Secret handling: env vs vault vs git (never)",
            "Supply-chain intro: dependency trust, lockfiles, typosquatting",
            "Secure coding habits in one language you already know"
          ]
        }
      ],
      "tools": [
        "Linux VM (VirtualBox/UTM/cloud free tier)",
        "Wireshark or browser DevTools",
        "OpenSSL CLI",
        "git",
        "curl / dig / ss",
        "Anki or Notion for notes",
        "draw.io / Excalidraw for diagrams"
      ],
      "labs": [
        "Hardened Ubuntu: create non-root sudo user, SSH key-only, UFW default deny incoming, review auth.log",
        "TLS lab: generate key+CSR, self-signed cert, inspect chain with openssl, compare cipher suites",
        "Packet storyboard: diagram DNS→TCP→TLS→HTTP for loading a site; annotate trust decisions",
        "STRIDE threat model: 3-tier app (browser, API, DB) with trust boundaries and 8+ threats",
        "Linux triage: script that prints disk, memory, top CPU, listening ports, failed SSH attempts count"
      ],
      "resources": [
        "NIST CSF 2.0 overview (official)",
        "OWASP Top 10 project page",
        "Linux Journey or equivalent free Linux primer",
        "Cloud provider 'Shared Responsibility Model' doc for your primary cloud",
        "Optional: CompTIA Security+ objectives map (if cert-bound)"
      ],
      "mistakes": [
        "Jumping to AWS/K8s before you can read a packet path or Linux log",
        "Collecting cert dumps without labs",
        "Treating crypto as 'use AES' without knowing where keys live",
        "Threat models that only list OWASP names with no assets/trust boundaries"
      ],
      "interview": [
        "Explain shared responsibility for an RDS/Cloud SQL database.",
        "Walk through what happens when you type https://example.com in a browser.",
        "How would you store passwords? Why not encrypt them with AES?",
        "Give one preventive and one detective control for SSH brute force."
      ],
      "checkpoint": "Deliver a 1–2 page shared-responsibility + STRIDE threat model for a sample SaaS, plus lab notes from hardened Linux and TLS labs.",
      "project": {
        "name": "Secure Baseline Lab Notebook",
        "level": "Starter",
        "build": [
          "Hardened Linux VM with SSH key-only + UFW notes",
          "TLS cert lab write-up (CSR, chain, openssl checks)",
          "1–2 page STRIDE threat model for a 3-tier SaaS",
          "Shared-responsibility matrix (IaaS/PaaS/SaaS)"
        ],
        "deliverable": "GitHub repo: /labs + /threat-model.md + screenshots",
        "skills": [
          "Linux",
          "TLS",
          "Threat modeling",
          "Risk vocabulary"
        ]
      },
      "certGuide": {
        "certs": "None required · Optional Security+ later if you need a broad baseline",
        "focus": "CIA, networking, Linux, crypto literacy, OWASP — exam vocab only after labs",
        "readyWhen": "Secure Baseline Lab Notebook + STRIDE write-up done"
      }
    },
    {
      "id": "cloud-core",
      "order": 1,
      "title": "Cloud Platform Core",
      "duration": "6–8 weeks",
      "goal": "Become fluent in one major cloud at architecture level: identity primitives, networking, compute/storage/data, observability baselines, and IaC-driven landing zones.",
      "outcomes": [
        "Design a secure VPC/VNet with public/private tiers, controlled egress, and no bastion password SSH",
        "Deploy compute, object storage, and a managed DB with encryption and private connectivity",
        "Manage identity: users/roles/policies, MFA, and short-lived credentials",
        "Express the environment in Terraform/OpenTofu with remote state and modules",
        "Enable org/account-level logging and prove you can find an API event"
      ],
      "weekPlan": [
        {
          "week": "Week 1",
          "focus": "Accounts & IAM mental model",
          "tasks": [
            "Root/break-glass hygiene; MFA everywhere",
            "Users vs roles vs policies; managed vs inline",
            "CLI profiles / SSO login flow",
            "Diagram your personal lab account boundaries"
          ]
        },
        {
          "week": "Week 2",
          "focus": "Networking deep dive",
          "tasks": [
            "Subnets, route tables, IGW/NAT",
            "Security groups/NSGs vs NACLs/Azure Firewall concepts",
            "Private endpoints / PrivateLink patterns",
            "Build public web + private app + private DB tiers"
          ]
        },
        {
          "week": "Week 3",
          "focus": "Compute & storage",
          "tasks": [
            "VM/instance roles (instance profiles)",
            "Object storage public access blocks; encryption",
            "Snapshots/AMIs and sharing risks",
            "IMDSv2 / metadata service hardening awareness"
          ]
        },
        {
          "week": "Week 4",
          "focus": "Data & serverless intro",
          "tasks": [
            "Managed DB in private subnet; no public flag",
            "Secrets injection patterns (high level)",
            "Functions/triggers threat surface intro",
            "Cost alarms / budgets"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "IaC landing zone",
          "tasks": [
            "Terraform state backend + locking",
            "Module for VPC + IAM role for app",
            "Policy-as-code first pass (Checkov)",
            "Document architecture decisions"
          ]
        },
        {
          "week": "Week 7–8",
          "focus": "Org & second cloud skim",
          "tasks": [
            "Multi-account/management group overview",
            "CloudTrail/Activity Log org trail",
            "Skim second cloud IAM+VNet mapping",
            "Checkpoint demo"
          ]
        }
      ],
      "topics": [
        {
          "title": "Pick and deepen one cloud",
          "depth": "Deep on one",
          "items": [
            "AWS path: IAM, Organizations, VPC, EC2, S3, RDS, Lambda, CloudWatch, CloudTrail, Config, GuardDuty overview",
            "Azure path: Entra ID, Management Groups, VNet, VM, Storage, Azure SQL, Key Vault, Monitor, Activity Log, Defender overview",
            "GCP path: IAM, Resource Manager, VPC, GCE, GCS, Cloud SQL, Secret Manager, Cloud Logging, SCC overview",
            "Map equivalent services across clouds in a one-page cheat sheet",
            "Free tier / student credits hygiene: never use production data in labs"
          ]
        },
        {
          "title": "Landing zones & networking",
          "depth": "Must know",
          "items": [
            "Hub-spoke / inspection VPC patterns; shared services",
            "Public vs private subnets; NAT egress; egress filtering goals",
            "Security group / NSG least privilege; deny-by-default habits",
            "Private endpoints for PaaS; avoid public DB endpoints",
            "Bastion vs Session Manager / OS Login; no long-lived SSH keys on jump hosts",
            "DNS in cloud (Route53/Azure DNS/Cloud DNS) and private zones"
          ]
        },
        {
          "title": "Identity primitives",
          "depth": "Must know",
          "items": [
            "Human identity vs workload identity",
            "Role assumption / managed identities; temporary credentials",
            "Policy evaluation intuition: explicit deny, least privilege, conditions",
            "MFA, password policies, access keys as anti-patterns for humans",
            "Service control policies / org policies / Azure Policy intro"
          ]
        },
        {
          "title": "IaC baseline",
          "depth": "Must know",
          "items": [
            "Terraform/OpenTofu: providers, state, workspaces, modules, variables",
            "Remote state security: encryption, locking, least-privilege state access",
            "CloudFormation / Bicep / Pulumi as alternatives — know why you picked one",
            "Plan/apply discipline; never apply from laptop to prod without review",
            "First policy-as-code pass: Checkov/tfsec on your modules"
          ]
        },
        {
          "title": "Ops & cost awareness",
          "depth": "Working knowledge",
          "items": [
            "Tags/labels for owner, env, data classification",
            "Budgets and anomaly alerts",
            "Basic metrics/logs dashboards",
            "Destroy/tear-down rituals for lab accounts"
          ]
        }
      ],
      "tools": [
        "Primary cloud free tier",
        "Terraform or OpenTofu",
        "AWS CLI / az / gcloud",
        "CloudShell",
        "Checkov",
        "draw.io"
      ],
      "labs": [
        "3-tier VPC/VNet: ALB/App Gateway public, app private, DB private; SSM/OS Login only",
        "Terraform module: network + IAM role for an app with least privilege S3 read",
        "Enable account/org trail; generate an event; find it in logs console/Athena/Log Analytics",
        "Break-fix: intentionally open SG/NSG and public bucket, then close and document blast radius",
        "Second-cloud skim lab: recreate a tiny private network in Azure or GCP and note IAM differences"
      ],
      "resources": [
        "Official Well-Architected / Cloud Adoption Framework security pillars",
        "CIS Foundations Benchmark for your cloud (read controls list)",
        "HashiCorp Terraform tutorials (state + modules)",
        "Provider IAM policy documentation (conditions/examples)"
      ],
      "mistakes": [
        "Building everything in the console with no IaC (unrepeatable, unreviewable)",
        "0.0.0.0/0 on management ports 'just for lab' and forgetting it",
        "Using long-lived access keys for yourself instead of SSO/OIDC",
        "Public databases or public buckets for demo data that looks real"
      ],
      "interview": [
        "How do you give an EC2/VM permission to read one bucket without access keys on disk?",
        "Design a VPC for a web app with a private database. Where does NAT sit?",
        "What is in CloudTrail/Activity Log and why must it be immutable?",
        "How do you prevent a developer account from disabling logging? (org policy / SCP idea)"
      ],
      "checkpoint": "Architecture diagram + Terraform/OpenTofu repo for a minimal secure landing zone, with logging enabled and a short README of control decisions.",
      "project": {
        "name": "Minimal Secure Landing Zone",
        "level": "Core",
        "build": [
          "Terraform/OpenTofu VPC/VNet: public web, private app, private DB",
          "No public DB; SSM/OS Login only (no open SSH)",
          "Remote state + locking; module for network + app role",
          "Org/account CloudTrail or Activity Log enabled + sample query"
        ],
        "deliverable": "IaC repo + architecture diagram + README control decisions",
        "skills": [
          "Cloud networking",
          "IAM roles",
          "Terraform",
          "Logging basics"
        ]
      },
      "certGuide": {
        "certs": "Optional: AWS CCP / AZ-900 / GCP Digital Leader",
        "focus": "IAM mental model, VPC/VNet, storage, IaC basics, shared responsibility",
        "readyWhen": "Minimal Secure Landing Zone Terraform repo shipped"
      }
    },
    {
      "id": "cloud-security",
      "order": 2,
      "title": "Cloud Security Controls",
      "duration": "8–10 weeks",
      "goal": "Own preventive, detective, and corrective controls across identity, data, compute, network, and posture management — and close findings end-to-end.",
      "outcomes": [
        "Implement least-privilege IAM with short-lived credentials and MFA on privileged paths",
        "Encrypt data at rest/in transit; manage CMKs and key policies correctly",
        "Run CSPM-style assessments (native + open source) and remediate Critical exposures",
        "Design logging architecture with retention, integrity, and investigation usability",
        "Explain common IAM privilege-escalation patterns at a conceptual level and how to detect them"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "IAM hardening",
          "tasks": [
            "Policy linting; remove * where possible",
            "Access Analyzer / unused permissions",
            "Federation sketch (SAML/OIDC)",
            "Break-glass procedure write-up"
          ]
        },
        {
          "week": "Week 3–4",
          "focus": "Data protection",
          "tasks": [
            "Default encryption; CMK vs platform key",
            "Bucket/blob policies + public access block",
            "Secrets Manager rotation drill",
            "Object Lock / immutability for logs"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "CSPM & benchmarks",
          "tasks": [
            "Enable Security Hub / Defender / SCC",
            "Run Prowler/Scout against lab",
            "Fix public exposures and open admin ports",
            "Map findings to CIS controls"
          ]
        },
        {
          "week": "Week 7–8",
          "focus": "Logging & detection baseline",
          "tasks": [
            "Org trail + VPC flow + DNS logs decisions",
            "GuardDuty/Defender alerts triage practice",
            "Immutable log bucket design",
            "Simple metric filter / alert"
          ]
        },
        {
          "week": "Week 9–10",
          "focus": "Attack path literacy",
          "tasks": [
            "Study public IAM escalation case studies (defensive)",
            "Document toxic combinations in your lab",
            "Policy-as-code gates for Terraform",
            "Checkpoint mock audit"
          ]
        }
      ],
      "topics": [
        {
          "title": "Identity & access",
          "depth": "Critical",
          "items": [
            "Users vs roles vs policies; ABAC with tags/attributes; policy conditions",
            "Federation (SAML/OIDC), SSO, SCIM provisioning",
            "Break-glass accounts: monitored, MFA, rarely used, alerted",
            "Privilege elevation / PIM / temporary admin; standing privilege reduction",
            "Workload identity: IRSA, Azure managed identities, GCP Workload Identity",
            "CIEM concepts: entitlement explosion, unused permissions, toxic combinations"
          ]
        },
        {
          "title": "Data & encryption",
          "depth": "Critical",
          "items": [
            "KMS/Key Vault/Cloud KMS: CMK lifecycle, rotation, grants/policies",
            "Envelope encryption intuition",
            "Object storage: Block Public Access, policies vs ACLs, versioning, Object Lock",
            "Database encryption, TLS to DB, private connectivity",
            "Secrets: manager services; never commit; rotation and lease TTLs",
            "Data classification labels and DLP awareness"
          ]
        },
        {
          "title": "CSPM & posture",
          "depth": "Must know",
          "items": [
            "CIS Benchmarks for cloud foundations",
            "Native posture: Security Hub, Defender for Cloud, Security Command Center",
            "Open source assessment: Prowler, ScoutSuite (lab)",
            "Public exposure detection: storage, snapshots, images, load balancers",
            "Continuous config: Config rules / Azure Policy / Org Policy",
            "Attack path thinking: identity + network + data combined"
          ]
        },
        {
          "title": "Logging & evidence",
          "depth": "Must know",
          "items": [
            "Management events vs data events; cost tradeoffs",
            "VPC Flow Logs, DNS query logs, WAF logs, load balancer logs",
            "Centralization patterns; cross-account log archive",
            "Integrity: Object Lock, restricted delete, separate security account",
            "Retention tiers for investigation vs compliance"
          ]
        },
        {
          "title": "Network & perimeter controls",
          "depth": "Must know",
          "items": [
            "WAF managed rules vs custom; bot control awareness",
            "Shield/DDoS basic posture",
            "Egress control and URL filtering concepts",
            "Private service connectivity as a security control"
          ]
        }
      ],
      "tools": [
        "Security Hub / GuardDuty / IAM Access Analyzer",
        "Defender for Cloud / Azure Policy",
        "Prowler or ScoutSuite",
        "Checkov / tfsec",
        "CloudTrail Lake / Athena / Log Analytics"
      ],
      "labs": [
        "Deliberately broken account: public bucket, open SG:22, over-permissive role — remediate and write before/after",
        "CMK for bucket/disk; prove default key vs CMK policy difference",
        "Rotate a secret; prove old credential fails",
        "Prowler/Scout report → ticket list → close Criticals",
        "Checkov in CI on Terraform; fail on public ACL / unrestricted egress"
      ],
      "resources": [
        "CIS Foundations Benchmark PDF/checklist for your cloud",
        "Provider security best practices / Well-Architected Security Pillar",
        "IAM Access Analyzer documentation",
        "OWASP Cloud-Native or cloud security top risks (skim)"
      ],
      "mistakes": [
        "Enabling every security service without triage ownership",
        "Encrypting with KMS but granting decrypt to everyone",
        "Logging to the same account with delete permissions for all admins",
        "Chasing every Low finding while Critical public exposure remains"
      ],
      "interview": [
        "How do you detect and prevent public S3/blob exposure continuously?",
        "Design break-glass for cloud admin access.",
        "What is a toxic IAM combination? Give an example.",
        "How would you prove to an auditor that root/MFA and CloudTrail are enforced?"
      ],
      "checkpoint": "Pass a mock CSPM audit on your lab: zero Critical public exposures, MFA on privileged identities, immutable logging path documented.",
      "project": {
        "name": "CSPM Fix-It Challenge",
        "level": "Core",
        "build": [
          "Intentionally broken lab account (public bucket, open SG, wild IAM)",
          "Scan with Prowler/Scout + native Security Hub/Defender",
          "Remediate Criticals; CMK encryption + secret rotation drill",
          "Before/after report mapped to CIS controls"
        ],
        "deliverable": "Remediation PR series + audit checklist PDF/MD",
        "skills": [
          "IAM least privilege",
          "CSPM",
          "KMS/secrets",
          "Evidence"
        ]
      },
      "certGuide": {
        "certs": "Primary: AWS Security Specialty or AZ-500 (or GCP PCSE)",
        "focus": "IAM federation, KMS/Key Vault, CSPM, logging/evidence, public exposure",
        "readyWhen": "CSPM Fix-It Challenge remediated + CIS-mapped report"
      }
    },
    {
      "id": "devops",
      "order": 3,
      "title": "DevOps Engineering Base",
      "duration": "6–8 weeks",
      "goal": "Ship software through CI/CD like a platform engineer — containers, artifacts, environments, observability — so you can secure the pipeline in the next phase.",
      "outcomes": [
        "Build a CI pipeline that tests, builds a container, and deploys to a non-prod environment",
        "Authenticate CI to cloud with OIDC (no static cloud keys)",
        "Apply Dockerfile best practices: multi-stage, non-root, minimal base",
        "Explain GitOps vs push-based deploy and when each fits",
        "Add basic metrics/logs/traces awareness to a sample app"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "CI platform mastery",
          "tasks": [
            "Pick GitHub Actions or GitLab CI deeply",
            "Build/test workflows; caching; artifacts",
            "Environments + protection rules",
            "OIDC to cloud role"
          ]
        },
        {
          "week": "Week 3–4",
          "focus": "Containers",
          "tasks": [
            "Multi-stage Dockerfile",
            "Scan image locally with Trivy",
            "Private registry push",
            "Run as non-root; read-only root FS experiment"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "Deploy & promote",
          "tasks": [
            "Staging deploy job",
            "Manual approval to prod-like env",
            "Versioned artifacts; immutable tags",
            "Rollback story"
          ]
        },
        {
          "week": "Week 7–8",
          "focus": "Observability + GitOps intro",
          "tasks": [
            "Health endpoints; structured logs",
            "Prometheus/OTel concepts",
            "Argo CD/Flux overview reading",
            "Checkpoint demo"
          ]
        }
      ],
      "topics": [
        {
          "title": "CI/CD platforms",
          "depth": "Must know",
          "items": [
            "Pipelines as code; reusable workflows; matrix builds",
            "Secrets in CI: masked vars vs OIDC; never plaintext cloud keys",
            "Environment protection: reviewers, wait timers, branch policies",
            "Artifact storage; retention; provenance hooks for later SBOM",
            "Fork PR isolation and poisoned pipeline awareness (preview)"
          ]
        },
        {
          "title": "Containers & packaging",
          "depth": "Must know",
          "items": [
            "Image layers; caching; .dockerignore",
            "Distroless/minimal bases; patch cadence",
            "Registry auth; immutable tags vs latest",
            "Cosign signing concept (full practice in DevSecOps phase)",
            "Compose for local; orchestration preview"
          ]
        },
        {
          "title": "Delivery strategies",
          "depth": "Working knowledge",
          "items": [
            "Blue/green and canary ideas; feature flags vs config vs secrets",
            "Push deploy vs GitOps reconcile loop",
            "Database migration caution in CD",
            "SLO/SLA/error budget vocabulary"
          ]
        },
        {
          "title": "Observability basics",
          "depth": "Working knowledge",
          "items": [
            "Metrics, logs, traces; cardinality pitfalls",
            "OpenTelemetry conceptual pipeline",
            "On-call hygiene: runbooks start here"
          ]
        }
      ],
      "tools": [
        "GitHub Actions or GitLab CI",
        "Docker",
        "Trivy",
        "Prometheus/Grafana (light)",
        "Cosign (intro)"
      ],
      "labs": [
        "CI: lint/test → build image → push to private registry via OIDC",
        "Multi-stage Dockerfile reducing size; USER non-root; verify with docker run",
        "Protected environment: staging auto, prod requires approval",
        "Add /healthz and structured JSON logs to a sample API",
        "Document rollback: redeploy previous digest"
      ],
      "resources": [
        "GitHub Actions security hardening docs",
        "Dockerfile best practices (official Docker docs)",
        "OpenTelemetry demo docs (skim)",
        "Twelve-Factor App (refresh)"
      ],
      "mistakes": [
        "Static AWS/Azure/GCP keys in repository secrets 'temporarily'",
        "Using latest tags in production deploys",
        "Running containers as root with writable root filesystem by default",
        "No rollback plan when CD is 'done'"
      ],
      "interview": [
        "How does OIDC from GitHub Actions to AWS/Azure work at a high level?",
        "What makes a container image production-ready?",
        "Compare GitOps and traditional CD pipelines.",
        "How do you prevent a compromised CI from deploying to prod?"
      ],
      "checkpoint": "Working CI/CD repo with OIDC cloud deploy, non-root image, environment approvals, and a short delivery README — no long-lived cloud keys.",
      "project": {
        "name": "OIDC Deploy Pipeline",
        "level": "Core",
        "build": [
          "Sample API in Docker (non-root, multi-stage)",
          "GitHub Actions/GitLab CI: test → build → push private registry",
          "Cloud deploy via OIDC only (delete static keys)",
          "Staging auto + prod approval gate + rollback note"
        ],
        "deliverable": "Working CI/CD repo with environment protections",
        "skills": [
          "CI/CD",
          "Containers",
          "OIDC",
          "Delivery"
        ]
      },
      "certGuide": {
        "certs": "No new cert yet · Optional AZ-400 / AWS DevOps Pro later",
        "focus": "CI/CD, containers, OIDC to cloud, environments — practice over badges",
        "readyWhen": "OIDC Deploy Pipeline works with zero static cloud keys"
      }
    },
    {
      "id": "devsecops",
      "order": 4,
      "title": "DevSecOps & Pipeline Security",
      "duration": "8–10 weeks",
      "goal": "Shift left without blocking delivery: integrate SAST, SCA, secrets, IaC, SBOM, signing, and policy gates — and harden the pipeline itself.",
      "outcomes": [
        "Design a secure SDLC with threat-modeling entry points and security champions habits",
        "Wire scanners into CI with severity thresholds, ownership, and time-boxed waivers",
        "Produce SBOMs; sign artifacts; verify signatures before deploy",
        "Threat-model the pipeline (PPE, dependency confusion, reusable workflow risks)",
        "Express release policy as code (OPA/Conftest or native branch rules + checks)"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "Secure SDLC & AppSec tooling",
          "tasks": [
            "Map security activities to SDLC stages",
            "Semgrep or CodeQL on a demo app",
            "Tune rules; reduce noise",
            "Developer-friendly PR comments"
          ]
        },
        {
          "week": "Week 3–4",
          "focus": "SCA + secrets",
          "tasks": [
            "Trivy/Grype/Dependabot",
            "CVE triage & VEX awareness",
            "gitleaks pre-commit + CI",
            "Secret incident drill (revoke/rotate)"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "Supply chain",
          "tasks": [
            "Syft SBOM CycloneDX",
            "cosign keyless signing",
            "Pin actions by SHA",
            "SLSA concepts reading"
          ]
        },
        {
          "week": "Week 7–8",
          "focus": "IaC + policy gates",
          "tasks": [
            "Checkov/KICS in pipeline",
            "OPA/Conftest on manifests",
            "Waiver file with expiry + owner",
            "Fail build on Critical"
          ]
        },
        {
          "week": "Week 9–10",
          "focus": "Pipeline hardening + DAST",
          "tasks": [
            "PPE threat model write-up",
            "ZAP baseline against staging",
            "Deploy job verifies signature",
            "Checkpoint"
          ]
        }
      ],
      "topics": [
        {
          "title": "Secure SDLC",
          "depth": "Critical",
          "items": [
            "Requirements → design → code → build → deploy → operate security activities",
            "Threat modeling lite (STRIDE/PASTA) in sprint ceremonies",
            "Security champions; DX matters as much as severity",
            "Bug bounty / VDP awareness for later maturity"
          ]
        },
        {
          "title": "Shift-left tooling",
          "depth": "Critical",
          "items": [
            "SAST: Semgrep, CodeQL, SonarQube — rule quality over quantity",
            "SCA: Dependabot, Snyk, Trivy, Grype — fix depth vs reachability",
            "Secrets: gitleaks, trufflehog, browser extension pitfalls",
            "IaC security: Checkov, tfsec, Terrascan, KICS",
            "DAST/API scanning in staging (ZAP); never production DAST without rules"
          ]
        },
        {
          "title": "Supply chain (2026 must)",
          "depth": "Critical",
          "items": [
            "SLSA levels; hermetic/reproducible build concepts",
            "SBOM: CycloneDX/SPDX; when procurement asks for it",
            "Sigstore/cosign attestations; verify in CD",
            "Dependency confusion, typosquatting, compromised maintainers",
            "Pin Actions/reusable workflows by commit SHA; least permissions GITHUB_TOKEN"
          ]
        },
        {
          "title": "Policy & gates",
          "depth": "Must know",
          "items": [
            "OPA/Conftest policy packs; unit-test policies",
            "Severity thresholds aligned to risk appetite",
            "Waivers: owner, expiry, ticket link, compensating control",
            "Admission control preview for Kubernetes (next phase)"
          ]
        },
        {
          "title": "Pipeline threat model",
          "depth": "Must know",
          "items": [
            "Poisoned pipeline execution (PPE) patterns",
            "Self-hosted runner risks",
            "Artifact tampering between build and deploy",
            "Separation of build and release roles"
          ]
        }
      ],
      "tools": [
        "Semgrep or CodeQL",
        "Trivy / Grype / Syft",
        "gitleaks",
        "Checkov",
        "cosign + Sigstore",
        "OPA/Conftest",
        "OWASP ZAP"
      ],
      "labs": [
        "Full security stage: secrets + SAST + SCA + IaC + SBOM upload",
        "Block merge on Critical CVEs unless waiver JSON present with expiry",
        "Sign image with cosign; verify digest in deploy job before apply",
        "Pin all GitHub Actions to SHAs; set least token permissions",
        "ZAP baseline against staging; triage False Positives document"
      ],
      "resources": [
        "SLSA framework documentation",
        "Sigstore docs / cosign quickstart",
        "GitHub Actions hardening guide",
        "OWASP Software Component Verification Standard (skim)"
      ],
      "mistakes": [
        "Failing the build on thousands of Lows (teams bypass everything)",
        "SBOM generated but never consumed in gates",
        "Signing artifacts but not verifying at deploy",
        "Security tools owned by security with no developer fix path"
      ],
      "interview": [
        "How do you introduce SAST without destroying developer trust?",
        "What is SLSA and what would SLSA 2 look like in GitHub Actions?",
        "How do you prevent a malicious PR from stealing cloud OIDC tokens?",
        "Explain SBOM vs attestation vs signature."
      ],
      "checkpoint": "Documented pipeline threat model + green gated pipeline on a demo app with SBOM, signature verification, and waiver policy.",
      "project": {
        "name": "Gated Secure SDLC Pipeline",
        "level": "Advanced",
        "build": [
          "Add gitleaks + Semgrep/CodeQL + Trivy SCA + Checkov",
          "Generate SBOM (Syft/CycloneDX); cosign sign image",
          "Verify signature before deploy; Critical CVE gate + waiver file",
          "1-page pipeline threat model (PPE / supply chain)"
        ],
        "deliverable": "Green gated pipeline + POLICY.md + attestations",
        "skills": [
          "SAST/SCA",
          "SBOM",
          "Signing",
          "Policy-as-code"
        ]
      },
      "certGuide": {
        "certs": "Optional Security+ · Prefer portfolio over another badge here",
        "focus": "SAST/SCA/secrets/IaC gates, SBOM, Sigstore/cosign, PPE threat model",
        "readyWhen": "Gated Secure SDLC Pipeline green with signature verify"
      }
    },
    {
      "id": "containers",
      "order": 5,
      "title": "Kubernetes & Container Security",
      "duration": "8–10 weeks",
      "goal": "Secure workloads from image to runtime on Kubernetes: RBAC, Pod Security, network policy, admission, secrets, GitOps trust, and runtime detection.",
      "outcomes": [
        "Apply CIS Kubernetes Benchmark themes in a lab cluster",
        "Enforce PSS restricted (or equivalent) and default-deny NetworkPolicy",
        "Write Kyverno/Gatekeeper policies for non-root, drop caps, signed images",
        "Triage a runtime alert (Falco/Tetragon) with a mini playbook",
        "Describe a secure GitOps delivery model (SSO, RBAC, repo trust)"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "K8s security model",
          "tasks": [
            "RBAC least privilege",
            "Namespaces as authz boundary (limits)",
            "Service accounts + cloud IRSA/WI",
            "API server audit log skim"
          ]
        },
        {
          "week": "Week 3–4",
          "focus": "Pod & workload hardening",
          "tasks": [
            "PSS restricted",
            "SecurityContext deep dive",
            "Resource quotas/limits",
            "Read-only root + seccomp profile"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "Network + secrets",
          "tasks": [
            "Default-deny NetworkPolicy",
            "Egress allowlists",
            "External Secrets vs sealed secrets tradeoffs",
            "etcd encryption awareness"
          ]
        },
        {
          "week": "Week 7–8",
          "focus": "Admission + supply chain",
          "tasks": [
            "Kyverno policies",
            "Image verify/sign gate",
            "Trivy operator or CI gate",
            "Break-glass policy exceptions"
          ]
        },
        {
          "week": "Week 9–10",
          "focus": "Runtime + GitOps",
          "tasks": [
            "Falco rules lab",
            "Argo CD RBAC/SSO reading + lab",
            "Tabletop: crypto miner in pod",
            "Checkpoint"
          ]
        }
      ],
      "topics": [
        {
          "title": "K8s security model",
          "depth": "Critical",
          "items": [
            "API server, etcd, kubelet, scheduler, controller trust boundaries",
            "RBAC: Role/ClusterRole; avoid cluster-admin for humans/apps",
            "Service accounts; automount disable; IRSA/Workload Identity",
            "Admission: validating/mutating webhooks; PSS",
            "Secrets in etcd; encryption at rest; never plain ConfigMaps for secrets"
          ]
        },
        {
          "title": "Workload hardening",
          "depth": "Critical",
          "items": [
            "runAsNonRoot, readOnlyRootFilesystem, allowPrivilegeEscalation=false",
            "drop ALL capabilities; add only needed",
            "seccomp/AppArmor profiles awareness",
            "Requests/limits; priority classes; noisy neighbor"
          ]
        },
        {
          "title": "Network & runtime",
          "depth": "Must know",
          "items": [
            "NetworkPolicy / Cilium policies; DNS egress considerations",
            "Service mesh mTLS (Istio/Linkerd) — when worth complexity",
            "Runtime: Falco, Tetragon, eBPF sensors",
            "Image scanning at admission; deny unscanned/unsigned"
          ]
        },
        {
          "title": "Platform patterns",
          "depth": "Working knowledge",
          "items": [
            "GitOps: Argo CD/Flux — SSO, RBAC, project isolation, repo allowlists",
            "Multi-tenancy soft vs hard isolation",
            "Ephemeral admin access to clusters",
            "Backup/DR for etcd and critical CRDs (security relevance)"
          ]
        }
      ],
      "tools": [
        "kind/k3d/minikube",
        "kubectl",
        "Kyverno or OPA Gatekeeper",
        "Trivy",
        "Falco",
        "Argo CD",
        "cilium (optional)"
      ],
      "labs": [
        "Cluster with PSS restricted + default-deny NetworkPolicy + allow DNS",
        "Kyverno: require non-root, drop caps, block :latest, require signed images (or simulated annotation gate)",
        "Falco: alert on shell in container; write triage notes",
        "Deploy via Argo CD from a dedicated GitOps repo with RBAC",
        "Break test: privileged pod should be rejected by admission"
      ],
      "resources": [
        "CIS Kubernetes Benchmark",
        "NSA/CISA Kubernetes Hardening Guide",
        "Kyverno policy library",
        "Falco rules documentation"
      ],
      "mistakes": [
        "cluster-admin bound to humans or CI forever",
        "NetworkPolicy only on one namespace while others are open",
        "Storing production secrets as base64 in Git manifests",
        "Runtime alerts with no owner or runbook"
      ],
      "interview": [
        "How does IRSA/Workload Identity stop long-lived cloud keys in pods?",
        "What does PSS restricted guarantee and what does it not?",
        "Default-deny NetworkPolicy broke DNS — how do you fix it safely?",
        "How do you trust Argo CD if Git is compromised?"
      ],
      "checkpoint": "Hardened demo cluster + policy pack + runtime alert playbook + short architecture note on GitOps trust.",
      "project": {
        "name": "Hardened GitOps Cluster",
        "level": "Advanced",
        "build": [
          "kind/k3d cluster with PSS restricted + default-deny NetworkPolicy",
          "Kyverno policies: non-root, drop caps, block :latest",
          "Falco rule + triage playbook for shell-in-container",
          "Argo CD/Flux deploy from dedicated GitOps repo"
        ],
        "deliverable": "k8s-security repo: manifests, policies, runbook",
        "skills": [
          "K8s RBAC",
          "Admission",
          "Runtime",
          "GitOps"
        ]
      },
      "certGuide": {
        "certs": "CKA then CKS (high ROI for platform roles)",
        "focus": "RBAC, PSS, NetworkPolicy, admission, runtime (Falco), GitOps trust",
        "readyWhen": "Hardened GitOps Cluster + Kyverno/Falco playbook"
      }
    },
    {
      "id": "identity",
      "order": 6,
      "title": "Identity, Zero Trust & Secrets",
      "duration": "5–7 weeks",
      "goal": "Treat identity as the primary perimeter across humans, workloads, and machines — with Zero Trust architecture literacy and a real secrets lifecycle.",
      "outcomes": [
        "Design SSO + MFA + conditional access for consoles and apps",
        "Implement workload identity end-to-end (CI and runtime) without static keys",
        "Operate secrets with rotation, least privilege, and break-glass",
        "Articulate NIST SP 800-207 Zero Trust pillars applied to a hybrid cloud case",
        "Explain OAuth2/OIDC flows and token risks clearly"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "IdP & workforce identity",
          "tasks": [
            "App registrations / OIDC app",
            "Groups + RBAC mapping",
            "MFA + conditional access policies",
            "SCIM awareness"
          ]
        },
        {
          "week": "Week 3",
          "focus": "OAuth/OIDC deep dive",
          "tasks": [
            "Auth code + PKCE",
            "Token lifetimes; refresh theft",
            "Audience/scope least privilege",
            "Service-to-service client credentials risks"
          ]
        },
        {
          "week": "Week 4–5",
          "focus": "Zero Trust + privileged access",
          "tasks": [
            "800-207 mapping exercise",
            "ZTNA vs VPN write-up",
            "JIT admin / PIM lab",
            "Device posture concepts"
          ]
        },
        {
          "week": "Week 6–7",
          "focus": "Secrets & machine identity",
          "tasks": [
            "Vault dynamic DB creds or cloud equivalent",
            "SPIFFE/SPIRE awareness",
            "cert-manager ACME lab",
            "Checkpoint architecture brief"
          ]
        }
      ],
      "topics": [
        {
          "title": "Enterprise identity",
          "depth": "Critical",
          "items": [
            "IdP: Entra ID / Okta / Keycloak — apps, groups, SCIM",
            "Lifecycle: joiner-mover-leaver; orphaned accounts",
            "Privileged Access Management; vaulting of standing admin",
            "Just-in-time admin (IAM Identity Center permission sets / PIM)",
            "Passwordless directions: FIDO2/passkeys awareness"
          ]
        },
        {
          "title": "OAuth2 / OIDC",
          "depth": "Critical",
          "items": [
            "Roles of AS, client, RS; redirect URI hygiene",
            "Authorization code + PKCE for public clients",
            "ID token vs access token vs refresh token",
            "Token binding / sender-constraining awareness",
            "Common failures: implicit flow legacy, overly broad scopes"
          ]
        },
        {
          "title": "Zero Trust",
          "depth": "Must know",
          "items": [
            "NIST SP 800-207: continuous verification, least privilege, assume breach",
            "Policy engine / PEP patterns",
            "Device posture, identity signals, microsegmentation",
            "ZTNA products vs reinventing with reverse proxies"
          ]
        },
        {
          "title": "Secrets & certificates",
          "depth": "Must know",
          "items": [
            "Vault / cloud secrets managers; dynamic secrets",
            "Secret sprawl discovery; brokered access",
            "SPIFFE/SPIRE for service identity awareness",
            "Certificate lifecycle; ACME; short-lived certs",
            "Human break-glass for secrets vaults"
          ]
        }
      ],
      "tools": [
        "Entra ID / Okta trial / Keycloak",
        "HashiCorp Vault (dev mode)",
        "cert-manager",
        "IAM Identity Center / PIM"
      ],
      "labs": [
        "Protect a demo app with OIDC login + MFA enforced at IdP",
        "CI → cloud via OIDC federation only; delete static keys",
        "Vault (or cloud SM) dynamic DB credentials with short TTL",
        "Conditional access style policy doc: block legacy auth / require MFA from new locations",
        "Issue TLS cert with cert-manager in lab cluster"
      ],
      "resources": [
        "NIST SP 800-207 Zero Trust Architecture",
        "OAuth 2.1 / OIDC Core (skim explanatory blogs + RFCs selectively)",
        "Cloud provider IAM Identity Center / Entra Conditional Access docs",
        "Vault Getting Started"
      ],
      "mistakes": [
        "SSO without MFA (single point of pleasant failure)",
        "Long-lived personal access tokens as 'service accounts'",
        "Secrets in CI logs via echo debugging",
        "Zero Trust slideware with flat network remaining"
      ],
      "interview": [
        "Compare VPN and ZTNA for contractor access to an admin UI.",
        "How does PKCE mitigate authorization code interception?",
        "Design JIT cloud admin for 20 engineers.",
        "Where should microservice credentials come from at runtime?"
      ],
      "checkpoint": "Architecture brief: Zero Trust access to a private admin UI, plus working OIDC app and workload identity lab evidence.",
      "project": {
        "name": "Zero Trust Admin Portal Access",
        "level": "Advanced",
        "build": [
          "Demo app protected with OIDC + MFA at IdP",
          "CI and runtime use workload identity (no static keys)",
          "Vault/cloud SM dynamic DB creds with short TTL",
          "Architecture brief: ZTNA vs VPN for contractor admin UI"
        ],
        "deliverable": "identity-lab repo + ZT architecture one-pager",
        "skills": [
          "OIDC/OAuth",
          "MFA/CA",
          "Secrets",
          "Zero Trust"
        ]
      },
      "certGuide": {
        "certs": "Covered heavily inside AZ-500 / AWS Security / PCSE · Optional SC-300 (Azure identity)",
        "focus": "OIDC/OAuth, MFA/CA, JIT admin, Vault/dynamic secrets, NIST 800-207",
        "readyWhen": "Zero Trust Admin Portal Access lab + architecture brief"
      }
    },
    {
      "id": "detection",
      "order": 7,
      "title": "Detection, IR & Cloud SOC",
      "duration": "6–8 weeks",
      "goal": "Detect, investigate, and contain cloud-native incidents with usable telemetry, high-signal detections, and playbooks that improve MTTD/MTTR.",
      "outcomes": [
        "Design a logging architecture that is usable under incident pressure (not just 'enabled')",
        "Write detections for identity abuse, data exfiltration indicators, and crypto-mining",
        "Run a tabletop and one live lab IR exercise with timeline notes",
        "Automate enrichment safely; require human approval for destructive containment",
        "Map detections to MITRE ATT&CK for Cloud/Containers"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "Telemetry architecture",
          "tasks": [
            "Inventory log sources",
            "Centralize to SIEM/lake",
            "Retention + cost model",
            "Query practice"
          ]
        },
        {
          "week": "Week 3–4",
          "focus": "Detections as code",
          "tasks": [
            "ATT&CK mapping sheet",
            "5 high-signal rules",
            "Tune false positives",
            "Alert → ticket fields"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "IR process",
          "tasks": [
            "NIST IR lifecycle applied to cloud",
            "Evidence preservation steps",
            "Containment runbooks",
            "Tabletop ransomware on object storage"
          ]
        },
        {
          "week": "Week 7–8",
          "focus": "Automation + metrics",
          "tasks": [
            "SOAR/step function enrichment",
            "Human gate on revoke/isolate",
            "MTTD/MTTR definition",
            "Checkpoint pack"
          ]
        }
      ],
      "topics": [
        {
          "title": "Telemetry architecture",
          "depth": "Critical",
          "items": [
            "Must-have: IdP sign-in, cloud control plane, network flow, workload runtime, CI logs",
            "SIEM options: Sentinel, Security Lake+Athena, Elastic, Splunk concepts",
            "Normalization, entity enrichment (user, IP, resource ARN)",
            "Cost control: filter noise early; tiered retention"
          ]
        },
        {
          "title": "Detections",
          "depth": "Critical",
          "items": [
            "MITRE ATT&CK Cloud/Containers tactics relevant to your stack",
            "Identity: impossible travel, MFA disable, suspicious AssumeRole chains",
            "Data: mass download, public policy changes, anomalous egress",
            "Compute: crypto-mining indicators, reverse shells in containers",
            "UEBA concepts; alert fatigue management; detection coverage metrics"
          ]
        },
        {
          "title": "IR & automation",
          "depth": "Must know",
          "items": [
            "NIST IR: prepare, detect/analyze, contain, eradicate, recover, lessons learned",
            "Cloud evidence: snapshots, log immutability, legal hold thinking",
            "Containment: isolate SG/NSG, revoke sessions, quarantine instances/pods",
            "SOAR playbooks; never fully auto-delete without guardrails",
            "Comms: status page / stakeholder updates templates"
          ]
        }
      ],
      "tools": [
        "GuardDuty / Defender / SCC",
        "Athena / Sentinel / Elastic",
        "Sigma concepts",
        "TheHive/MISP optional",
        "Cloud provider IR playbook docs"
      ],
      "labs": [
        "Simulate noisy IAM access key usage; detect with a custom query/rule",
        "Playbook: enrich alert → notify Slack/email → require human to revoke key",
        "Tabletop: ransomware encrypts object storage versions — decisions timeline",
        "Container escape/miners tabletop using Falco alert as trigger",
        "Build detection-as-code repo with README coverage map (ATT&CK)"
      ],
      "resources": [
        "MITRE ATT&CK for Cloud matrix",
        "Cloud provider incident response whitepapers",
        "NIST SP 800-61 (IR) overview",
        "Sigma rule repository (read patterns)"
      ],
      "mistakes": [
        "Alerting on everything; paging on Lows",
        "No immutable logs — attacker deletes evidence",
        "Automation that revokes prod credentials on flaky alerts",
        "IR docs that only exist as slides"
      ],
      "interview": [
        "First hour actions for suspected compromised cloud access key.",
        "How do you keep CloudTrail/Activity Log from being tampered with?",
        "Give two high-signal detections for ransomware in cloud storage.",
        "How would you measure detection engineering success?"
      ],
      "checkpoint": "Detection-as-code repo with ≥5 high-signal cloud rules, ATT&CK map, and IR runbooks for key compromise and storage ransomware.",
      "project": {
        "name": "Cloud Detection-as-Code Pack",
        "level": "Advanced",
        "build": [
          "Centralize control-plane + identity logs for lab",
          "≥5 high-signal detections (key abuse, public policy change, mining)",
          "ATT&CK mapping table; alert → ticket fields",
          "IR runbooks: access-key compromise + storage ransomware tabletop"
        ],
        "deliverable": "detections/ repo with queries + runbooks + coverage map",
        "skills": [
          "SIEM queries",
          "ATT&CK",
          "IR",
          "Automation gates"
        ]
      },
      "certGuide": {
        "certs": "Cloud security cert domains on monitoring/IR · Optional: CompTIA CySA+ / GCFR if SOC-bound",
        "focus": "ATT&CK for Cloud, detection-as-code, containment, evidence integrity",
        "readyWhen": "Cloud Detection-as-Code Pack (≥5 rules) + IR runbooks"
      }
    },
    {
      "id": "advanced",
      "order": 8,
      "title": "2026 Advanced Stack",
      "duration": "Ongoing / 8+ weeks",
      "goal": "Operate at platform-security level: CNAPP, ASPM, AI/LLM system security, multi-cloud governance, and paved-road platform engineering.",
      "outcomes": [
        "Explain CNAPP pillars and where point tools still fit",
        "Design an ASPM-style ownership model connecting findings to services and risk",
        "Threat-model an LLM/RAG/agent app and propose concrete guardrails",
        "Propose a multi-cloud policy and exception board operating model",
        "Define 'paved road' secure defaults for a mid-size engineering org"
      ],
      "weekPlan": [
        {
          "week": "Week 1–2",
          "focus": "CNAPP literacy",
          "tasks": [
            "Pillars: CSPM/CWPP/CIEM/IaC/vuln",
            "Trial one CNAPP or simulate with open tools",
            "Attack path write-up on your lab",
            "Tool rationalization memo"
          ]
        },
        {
          "week": "Week 3–4",
          "focus": "ASPM / product security",
          "tasks": [
            "Service catalog ownership",
            "Severity → SLA matrix",
            "Noise reduction strategy",
            "Security champions operating cadence"
          ]
        },
        {
          "week": "Week 5–6",
          "focus": "AI system security",
          "tasks": [
            "OWASP LLM Top 10 mapping",
            "RAG data governance threats",
            "Agent tool-egress controls",
            "Shadow-AI policy draft"
          ]
        },
        {
          "week": "Week 7–8+",
          "focus": "Governance at scale",
          "tasks": [
            "Control → evidence automation",
            "FinOps∩SecOps cost narrative",
            "Paved road blueprint",
            "Senior design doc checkpoint"
          ]
        }
      ],
      "topics": [
        {
          "title": "CNAPP & ASPM",
          "depth": "2026 core",
          "items": [
            "CSPM + CWPP + CIEM + IaC + vulnerability continuum in one risk graph",
            "Vendor landscape awareness (Wiz, Prisma, Lacework, Defender, open stacks) — concepts over brand loyalty",
            "Attack-path / toxic combination analysis",
            "ASPM: correlate SAST/SCA/secrets/runtime to services and owners",
            "Risk scoring that executives can understand"
          ]
        },
        {
          "title": "AI / LLM security",
          "depth": "2026 rising",
          "items": [
            "OWASP LLM Top 10; prompt injection direct/indirect",
            "RAG: sensitive chunk leakage; access control on corpora",
            "Agentic tools: least privilege, human-in-the-loop, egress allowlists",
            "Model/API key protection; logging of prompts with privacy care",
            "Secure coding assistants; enterprise shadow-AI policy"
          ]
        },
        {
          "title": "Governance & platform",
          "depth": "Senior",
          "items": [
            "Control frameworks mapped to automated evidence",
            "Exception board: expiry, compensating controls, risk acceptance",
            "FinOps ∩ SecOps: logging/scanning cost vs coverage",
            "Platform engineering: golden paths, templates, paved roads",
            "Chaos/fault injection for resilience (carefully scoped)"
          ]
        }
      ],
      "tools": [
        "One CNAPP trial or open-source CNAPP-like stack",
        "Your existing Semgrep/Trivy/Checkov/Kyverno set",
        "Local RAG demo app for threat modeling",
        "Architecture Decision Records (ADR) template"
      ],
      "labs": [
        "Map demo env into inventory + attack path narrative (even in a spreadsheet)",
        "Threat-model internal chatbot with tool use; add 5 guardrails",
        "Write org policy: approved AI tools, data classes forbidden in prompts, key handling",
        "Paved-road RFC: secure Terraform module + CI template teams must use",
        "Executive one-pager: top 5 risks, trend, asks"
      ],
      "resources": [
        "OWASP Top 10 for LLM Applications",
        "CNAPP category explainers from analyst notes (read critically)",
        "NIST AI RMF overview (skim)",
        "Platform engineering / paved road essays (Thoughtworks etc., skim)"
      ],
      "mistakes": [
        "Buying CNAPP without owners for findings",
        "Blocking all AI instead of governing it",
        "Architecture theater with no paved road implementation",
        "Ignoring cost until logging is turned off in an incident"
      ],
      "interview": [
        "What problems does CNAPP solve that CSPM alone does not?",
        "How would you roll out ASPM in a 50-service org?",
        "Threat-model a RAG chatbot with access to HR PDFs.",
        "Describe a paved road for secure microservice onboarding."
      ],
      "checkpoint": "Senior-style design doc: CNAPP + ASPM operating model for a mid-size org, plus AI app threat model and paved-road RFC.",
      "project": {
        "name": "CNAPP + AI App Security Operating Model",
        "level": "Senior",
        "build": [
          "Inventory lab assets into an attack-path narrative",
          "Threat-model a RAG chatbot with tools; add 5 guardrails",
          "Org AI usage policy draft (data classes, approved tools)",
          "Paved-road RFC: secure Terraform module + CI template"
        ],
        "deliverable": "design-docs/ CNAPP-ASPM model + AI threat model",
        "skills": [
          "CNAPP/ASPM",
          "LLM security",
          "Governance",
          "Platform"
        ]
      },
      "certGuide": {
        "certs": "No rush · Later CCSP for architecture narrative",
        "focus": "CNAPP/ASPM operating model, AI/LLM security, paved roads, governance",
        "readyWhen": "CNAPP + AI operating model design doc shipped"
      }
    },
    {
      "id": "career",
      "order": 9,
      "title": "Career, Certs & Portfolio",
      "duration": "Parallel track",
      "goal": "Convert skills into credibility: role-aligned certifications, public labs with write-ups, and interview narratives grounded in your checkpoints.",
      "outcomes": [
        "Choose a cert ladder that matches your target role (not a badge wall)",
        "Ship 4 portfolio projects with threat models and controls matrices",
        "Tell architecture and incident stories with metrics (coverage, criticals closed, MTTD)",
        "Maintain a public learning log linked from GitHub profile"
      ],
      "weekPlan": [
        {
          "week": "Ongoing",
          "focus": "Portfolio cadence",
          "tasks": [
            "One project README polish per month",
            "One blog-quality write-up per phase checkpoint",
            "Mock interview monthly",
            "Cert study only after matching lab checkpoint"
          ]
        }
      ],
      "topics": [
        {
          "title": "Certification ladder (pick path)",
          "depth": "Signal",
          "items": [
            "Foundations (optional): Security+ / AZ-900 / AWS CCP",
            "Cloud security: AWS Security Specialty, AZ-500, Google Professional Cloud Security Engineer",
            "DevSecOps-adjacent: CKA then CKS; GIAC cloud certs if budget allows",
            "Architecture later: CCSP / CISSP when experience depth matches",
            "Rule: cert after checkpoint lab, not instead of it"
          ]
        },
        {
          "title": "Target roles (2026)",
          "depth": "Market",
          "items": [
            "Cloud Security Engineer — controls, IAM, CSPM, IR support",
            "DevSecOps / Product Security — pipelines, AppSec, ASPM",
            "Platform Security — Kubernetes, paved roads, developer experience",
            "Security Architect — Zero Trust, multi-account, frameworks",
            "Detection Engineer (Cloud) — ATT&CK, SIEM-as-code"
          ]
        },
        {
          "title": "Portfolio projects (must ship)",
          "depth": "Must ship",
          "items": [
            "Secure landing zone + Terraform + policy-as-code",
            "Full DevSecOps pipeline with signed artifacts & SBOM",
            "Hardened K8s + Kyverno + Falco + GitOps",
            "Detection-as-code pack with IR runbooks"
          ]
        },
        {
          "title": "Interview storytelling",
          "depth": "Must know",
          "items": [
            "STAR stories from your labs (Situation, Task, Action, Result)",
            "Diagram on a whiteboard: trust boundaries first",
            "Admit tradeoffs; show how you would measure success",
            "Read postmortems (cloud outages/breaches) and discuss controls"
          ]
        }
      ],
      "tools": [
        "Public GitHub",
        "Blog / Notion / LinkedIn articles",
        "Home lab or free-tier multi-account",
        "Excalidraw"
      ],
      "labs": [
        "Publish one project README with threat model + controls matrix + screenshots",
        "Mock interview: walk a cloud breach case study end-to-end",
        "Contribute a Semgrep rule or Kyverno policy upstream / to a gist with tests",
        "Profile README: pin CloudSec Path projects and live site link"
      ],
      "resources": [
        "Official cert exam guides for your chosen ladder",
        "Public cloud breach postmortems (defensive reading)",
        "Hiring rubrics / job descriptions — reverse-engineer keywords honestly"
      ],
      "mistakes": [
        "Five certs, zero repositories",
        "Portfolio repos without READMEs or with secrets still in history",
        "Applying to architect roles with only tutorial-level labs",
        "Hiding student status instead of framing learning velocity"
      ],
      "interview": [
        "Which project in your portfolio best shows cloud IAM judgment?",
        "Tell me about a time a security control broke developer productivity — what did you change?",
        "How do you prioritize a backlog of 500 scanner findings?",
        "Where are you weaker on this roadmap and what is your plan?"
      ],
      "checkpoint": "Resume bullets tied to measurable outcomes (MTTD, criticals closed, coverage %) + 4 public projects + live CloudSec Path site in profile.",
      "project": {
        "name": "Public Portfolio Launch",
        "level": "Career",
        "build": [
          "Polish READMEs for 4 best phase projects",
          "Pin repos + live CloudSec Path site on GitHub profile",
          "Write 2 interview STAR stories from your labs",
          "Optional: contribute one Semgrep/Kyverno rule with tests"
        ],
        "deliverable": "Portfolio index page + resume bullets with metrics",
        "skills": [
          "Storytelling",
          "Documentation",
          "Interview readiness"
        ]
      },
      "certGuide": {
        "certs": "Sit remaining exams on your chosen track · CISSP/CCSP only with experience",
        "focus": "Resume metrics, STAR stories, public repos pinned to CloudSec Path",
        "readyWhen": "4 polished projects + cert(s) aligned to target role"
      }
    }
  ],
  "masterProjects": [
    {
      "name": "SecureCloud Platform (Capstone)",
      "duration": "6–10 weeks",
      "goal": "End-to-end mini company platform: landing zone + app + pipeline + K8s + identity + detections.",
      "includes": [
        "Multi-account/folder landing zone (Terraform) with SCP/Policy baselines",
        "Sample microservice on hardened Kubernetes (PSS, NetworkPolicy, Kyverno)",
        "Full DevSecOps pipeline: SAST/SCA/secrets/IaC + SBOM + cosign verify",
        "OIDC everywhere (CI + workload identity); break-glass documented",
        "Detection pack + IR runbooks wired to native findings",
        "Executive one-pager: risks, coverage, residual risk"
      ],
      "demo": "Live diagram walkthrough + failed/blocked pipeline demo + one simulated incident timeline"
    },
    {
      "name": "DevSecOps Factory",
      "duration": "4–6 weeks",
      "goal": "Reusable paved road other teams can copy — golden templates, not a one-off app.",
      "includes": [
        "Terraform module library (VPC, IAM role, private storage) with Checkov CI",
        "Reusable GitHub Actions/GitLab workflows pinned by SHA",
        "Policy pack (OPA/Conftest or Kyverno) with unit tests",
        "Developer README: how to onboard a new service in <1 day",
        "Waiver process with expiry + owner fields"
      ],
      "demo": "Onboard a second dummy service using only the paved road"
    },
    {
      "name": "CloudSOC Lite",
      "duration": "4–6 weeks",
      "goal": "Small but real detection engineering portfolio for Cloud SOC / detection roles.",
      "includes": [
        "Log lake/SIEM queries for identity + data exfil patterns",
        "10 detections as code with ATT&CK tags",
        "SOAR-style enrichment playbook (human gate on revoke)",
        "Tabletop package: ransomware on object storage",
        "MTTD/MTTR measurement notes from your drills"
      ],
      "demo": "Inject noisy IAM key activity and show detection → ticket → containment decision"
    },
    {
      "name": "AI Guardrails Lab",
      "duration": "3–5 weeks",
      "goal": "Secure an internal LLM/RAG assistant — strong 2026 differentiator.",
      "includes": [
        "Minimal RAG app with auth and corpus access control",
        "Threat model: prompt injection, data leak, tool abuse",
        "Guardrails: input/output filters, allowlisted tools, egress controls",
        "Logging/redaction strategy for prompts",
        "Policy: what data may never enter prompts"
      ],
      "demo": "Show blocked injection attempt + allowed safe query side-by-side"
    }
  ],
  "certPlan": {
    "title": "Recommended path (best ROI)",
    "rule": "Checkpoint lab / phase project first, then exam. Pick one cloud and stay on that track. Use Exam coverage below to see what Phase 0–1 (and later phases) actually cover for each cert.",
    "enoughNote": "The short ROI table alone is not enough. This page includes a full per-phase cert map, exam-content coverage for every recommended cert (what phases cover vs exam gaps), exam prep cards, priority order, role→cert→project pairing, and an inline Cert guide in every phase panel.",
    "roiPath": [
      {
        "stage": "1",
        "when": "After Phase 0–1",
        "cert": "AWS Cloud Practitioner or AZ-900 (optional)",
        "why": "Only if you are new to cloud"
      },
      {
        "stage": "2",
        "when": "After Phase 2",
        "cert": "AWS Security Specialty or AZ-500",
        "why": "Core cloud security hiring signal"
      },
      {
        "stage": "3",
        "when": "After Phase 3–4",
        "cert": "Optional Security+ if you need a general baseline",
        "why": "AppSec / DevSecOps context — portfolio still matters more"
      },
      {
        "stage": "4",
        "when": "After Phase 5",
        "cert": "CKA → CKS",
        "why": "Strong for Kubernetes / platform security roles"
      },
      {
        "stage": "5",
        "when": "After Phase 6–7",
        "cert": "Finish cloud security cert if not done; practice IR with native tools",
        "why": "Identity + detection depth for Cloud SOC paths"
      },
      {
        "stage": "6",
        "when": "Later (1–2 years experience)",
        "cert": "CCSP or CISSP",
        "why": "Architecture / senior roles — after real depth"
      }
    ],
    "tracks": [
      {
        "name": "AWS track",
        "steps": [
          "CCP (optional) after Phase 1",
          "AWS Security Specialty after Phase 2 (+ labs)",
          "CKA → CKS after Phase 5",
          "Optional: AWS DevOps Professional later if platform-heavy"
        ]
      },
      {
        "name": "Azure track",
        "steps": [
          "AZ-900 (optional) after Phase 1",
          "AZ-500 after Phase 2 (+ labs)",
          "CKA → CKS after Phase 5",
          "Optional: AZ-400 if DevOps/platform-heavy"
        ]
      },
      {
        "name": "GCP track",
        "steps": [
          "Cloud Digital Leader / ACE (optional) after Phase 1",
          "Professional Cloud Security Engineer after Phase 2–6",
          "CKA → CKS after Phase 5",
          "Optional: Professional Cloud DevOps Engineer later"
        ]
      }
    ],
    "phaseMap": [
      {
        "phase": "00 Foundations",
        "phaseId": "foundations",
        "certs": "None required · Optional Security+ later if you need a broad baseline",
        "focus": "CIA, networking, Linux, crypto literacy, OWASP — exam vocab only after labs",
        "readyWhen": "Secure Baseline Lab Notebook + STRIDE write-up done"
      },
      {
        "phase": "01 Cloud Platform Core",
        "phaseId": "cloud-core",
        "certs": "Optional: AWS CCP / AZ-900 / GCP Digital Leader",
        "focus": "IAM mental model, VPC/VNet, storage, IaC basics, shared responsibility",
        "readyWhen": "Minimal Secure Landing Zone Terraform repo shipped"
      },
      {
        "phase": "02 Cloud Security Controls",
        "phaseId": "cloud-security",
        "certs": "Primary: AWS Security Specialty or AZ-500 (or GCP PCSE)",
        "focus": "IAM federation, KMS/Key Vault, CSPM, logging/evidence, public exposure",
        "readyWhen": "CSPM Fix-It Challenge remediated + CIS-mapped report"
      },
      {
        "phase": "03 DevOps Engineering Base",
        "phaseId": "devops",
        "certs": "No new cert yet · Optional AZ-400 / AWS DevOps Pro later",
        "focus": "CI/CD, containers, OIDC to cloud, environments — practice over badges",
        "readyWhen": "OIDC Deploy Pipeline works with zero static cloud keys"
      },
      {
        "phase": "04 DevSecOps & Pipeline Security",
        "phaseId": "devsecops",
        "certs": "Optional Security+ · Prefer portfolio over another badge here",
        "focus": "SAST/SCA/secrets/IaC gates, SBOM, Sigstore/cosign, PPE threat model",
        "readyWhen": "Gated Secure SDLC Pipeline green with signature verify"
      },
      {
        "phase": "05 Kubernetes & Container Security",
        "phaseId": "containers",
        "certs": "CKA then CKS (high ROI for platform roles)",
        "focus": "RBAC, PSS, NetworkPolicy, admission, runtime (Falco), GitOps trust",
        "readyWhen": "Hardened GitOps Cluster + Kyverno/Falco playbook"
      },
      {
        "phase": "06 Identity, Zero Trust & Secrets",
        "phaseId": "identity",
        "certs": "Covered heavily inside AZ-500 / AWS Security / PCSE · Optional SC-300 (Azure identity)",
        "focus": "OIDC/OAuth, MFA/CA, JIT admin, Vault/dynamic secrets, NIST 800-207",
        "readyWhen": "Zero Trust Admin Portal Access lab + architecture brief"
      },
      {
        "phase": "07 Detection, IR & Cloud SOC",
        "phaseId": "detection",
        "certs": "Cloud security cert domains on monitoring/IR · Optional: CompTIA CySA+ / GCFR if SOC-bound",
        "focus": "ATT&CK for Cloud, detection-as-code, containment, evidence integrity",
        "readyWhen": "Cloud Detection-as-Code Pack (≥5 rules) + IR runbooks"
      },
      {
        "phase": "08 2026 Advanced Stack",
        "phaseId": "advanced",
        "certs": "No rush · Later CCSP for architecture narrative",
        "focus": "CNAPP/ASPM operating model, AI/LLM security, paved roads, governance",
        "readyWhen": "CNAPP + AI operating model design doc shipped"
      },
      {
        "phase": "09 Career / Portfolio",
        "phaseId": "career",
        "certs": "Sit remaining exams on your chosen track · CISSP/CCSP only with experience",
        "focus": "Resume metrics, STAR stories, public repos pinned to CloudSec Path",
        "readyWhen": "4 polished projects + cert(s) aligned to target role"
      }
    ],
    "examPrep": [
      {
        "cert": "AWS Security Specialty",
        "prepWeeks": "4–8 weeks after Phase 2 labs",
        "domains": [
          "Incident response",
          "Logging & monitoring",
          "Infrastructure security",
          "Identity & access management",
          "Data protection"
        ],
        "studyTips": [
          "Practice IAM policy conditions and federation",
          "Know CloudTrail / Config / GuardDuty / Security Hub workflows",
          "Lab KMS CMK policies and S3 public access blocks",
          "Map every wrong answer back to a control you can demo"
        ]
      },
      {
        "cert": "AZ-500",
        "prepWeeks": "4–8 weeks after Phase 2 labs",
        "domains": [
          "Manage identity & access",
          "Secure networking",
          "Secure compute / storage / databases",
          "Microsoft Defender / Security posture"
        ],
        "studyTips": [
          "Drill Entra ID Conditional Access + Privileged Identity Management",
          "Practice Key Vault, private endpoints, NSGs",
          "Know Defender for Cloud recommendations → remediation",
          "Use your landing zone + CSPM project as the mental model"
        ]
      },
      {
        "cert": "CKA → CKS",
        "prepWeeks": "CKA 3–6 weeks · CKS 3–6 weeks after Phase 5 project",
        "domains": [
          "CKA: cluster architecture, workloads, networking, storage, troubleshooting",
          "CKS: cluster setup hardening, PSS, supply chain, runtime, auditing"
        ],
        "studyTips": [
          "Do Killer.sh / similar timed labs — speed matters",
          "Memorize kubectl + YAML patterns, not PDFs",
          "Your Hardened GitOps Cluster should mirror CKS tasks",
          "Pass CKA before booking CKS"
        ]
      },
      {
        "cert": "GCP Professional Cloud Security Engineer",
        "prepWeeks": "6–10 weeks spanning Phases 2–6",
        "domains": [
          "Configuring access",
          "Network security",
          "Data protection",
          "Security operations",
          "Compliance assurance"
        ],
        "studyTips": [
          "Practice VPC SC, IAM conditions, Cloud KMS, SCC findings",
          "Align labs to org policy + private Google access patterns",
          "Keep a controls matrix like your CSPM project"
        ]
      }
    ],
    "twelveMonth": [
      {
        "months": "1–3",
        "focus": "Phases 0–1 labs → optional CCP / AZ-900"
      },
      {
        "months": "4–7",
        "focus": "Phases 2–4 projects → AWS Security Specialty or AZ-500"
      },
      {
        "months": "8–10",
        "focus": "Phase 5 project → CKA then CKS"
      },
      {
        "months": "11–12",
        "focus": "Phases 6–8 portfolio + interviews; CCSP only if ready"
      }
    ],
    "byRole": [
      {
        "role": "Cloud Security Engineer",
        "certs": "AWS Security Specialty / AZ-500 / GCP PCSE",
        "projects": "Landing zone + CSPM Fix-It + detection pack"
      },
      {
        "role": "DevSecOps / Product Security",
        "certs": "Cloud security cert + CKS (helpful)",
        "projects": "OIDC pipeline + gated SDLC + DevSecOps Factory"
      },
      {
        "role": "Platform Security",
        "certs": "CKS (+ cloud security cert)",
        "projects": "Hardened GitOps Cluster + paved-road modules"
      },
      {
        "role": "Detection / Cloud SOC",
        "certs": "Cloud security cert + SOC-adjacent optional",
        "projects": "CloudSOC Lite + IR tabletops"
      },
      {
        "role": "Security Architect (later)",
        "certs": "CCSP / CISSP after experience",
        "projects": "SecureCloud Platform capstone + design docs"
      }
    ],
    "priorityOrder": [
      "1) One cloud security associate/specialty (AWS Sec Spec / AZ-500 / PCSE)",
      "2) CKA → CKS if targeting K8s/platform/DevSecOps",
      "3) Portfolio master project (SecureCloud Platform or DevSecOps Factory)",
      "4) CCSP/CISSP only after 1–2 years of applied depth"
    ],
    "skipEarly": [
      "Do not stack 5 certs with empty GitHub",
      "Do not take CISSP / CCSP before real labs",
      "Do not chase GIAC first unless your employer pays",
      "Do not sit AWS Security Specialty / AZ-500 before Phase 2 project",
      "Do not book CKS before CKA and a hardened cluster lab"
    ],
    "examCoverage": [
      {
        "cert": "AWS Cloud Practitioner (CLF-C02)",
        "afterPhases": "0–1 (optional)",
        "canSitIf": "You finished Foundations + Cloud Platform Core labs (landing zone basics).",
        "coversFromPath": [
          "Shared responsibility model",
          "Core AWS services (EC2, S3, VPC, IAM overview, CloudWatch/CloudTrail awareness)",
          "Cloud economics / billing basics",
          "Security & compliance high-level concepts from Phase 0"
        ],
        "examDomains": [
          "Cloud concepts",
          "Security and compliance",
          "Cloud technology and services",
          "Billing, pricing, and support"
        ],
        "gapsToStudyExtra": [
          "AWS global infrastructure naming (Regions/AZs/Edge)",
          "Support plans & pricing calculator scenarios",
          "Service catalog breadth (many services only need recognition, not deep labs)"
        ],
        "verdict": "Yes — Phase 0–1 covers most concepts. Add 3–7 days of AWS-specific service flashcards before the exam."
      },
      {
        "cert": "AZ-900 Microsoft Azure Fundamentals",
        "afterPhases": "0–1 (optional)",
        "canSitIf": "Same readiness as CCP, but on Azure vocabulary (Entra ID, VNet, Resource Groups).",
        "coversFromPath": [
          "Cloud concepts & shared responsibility",
          "Core Azure primitives mapped in Phase 1",
          "Identity basics, networking, storage, compute",
          "Security/governance awareness (Policy, Defender overview)"
        ],
        "examDomains": [
          "Cloud concepts",
          "Azure architecture and services",
          "Azure management and governance"
        ],
        "gapsToStudyExtra": [
          "Azure portal navigation & product names",
          "Management groups / subscriptions wording",
          "Azure pricing & SLA question patterns"
        ],
        "verdict": "Yes — Phase 0–1 is enough conceptually. Spend a few days on Microsoft Learn AZ-900 modules for naming."
      },
      {
        "cert": "CompTIA Security+",
        "afterPhases": "0–4 (optional baseline)",
        "canSitIf": "Strong Phase 0 + exposure to Phase 2–4 controls and pipelines.",
        "coversFromPath": [
          "Threats, crypto, networking, IAM concepts (Phase 0)",
          "Secure architecture & cloud security themes (Phase 2)",
          "Secure ops / monitoring intro (Phase 7 overlap light)",
          "AppSec / supply chain awareness (Phase 4 light)"
        ],
        "examDomains": [
          "General security concepts",
          "Threats, vulnerabilities, and mitigations",
          "Security architecture",
          "Security operations",
          "Security program management and oversight"
        ],
        "gapsToStudyExtra": [
          "On-prem / hybrid topics not deep in this cloud path",
          "PKI procedural details & incident frameworks wording",
          "Governance/risk/compliance exam language"
        ],
        "verdict": "Partial — great foundation overlap, but not a perfect 1:1. Use Security+ only if you need a vendor-neutral baseline."
      },
      {
        "cert": "AWS Security Specialty",
        "afterPhases": "2 (primary) · reinforced by 6–7",
        "canSitIf": "CSPM Fix-It project done + IAM/KMS/logging labs solid.",
        "coversFromPath": [
          "IAM, federation, least privilege, Access Analyzer (Phase 2)",
          "KMS, encryption, secrets, S3 exposure (Phase 2)",
          "CloudTrail/Config/GuardDuty/Security Hub (Phase 2 + 7)",
          "VPC security patterns from Phase 1–2",
          "Incident response & detective controls (Phase 7)",
          "Identity/Zero Trust themes (Phase 6) help IAM scenarios"
        ],
        "examDomains": [
          "Incident response",
          "Logging and monitoring",
          "Infrastructure security",
          "Identity and access management",
          "Data protection"
        ],
        "gapsToStudyExtra": [
          "AWS service-specific exam tricks (WAF, Shield, Macie, Analyzer details)",
          "Multi-account Organizations/SCP exam scenarios",
          "Timed practice exams for wording"
        ],
        "verdict": "Mostly yes after Phase 2 projects. Do official domain review + practice tests; Phase 6–7 make you stronger."
      },
      {
        "cert": "AZ-500 Azure Security Engineer",
        "afterPhases": "2 (primary) · reinforced by 6–7",
        "canSitIf": "Azure landing zone + CSPM-style remediations + Entra ID labs done.",
        "coversFromPath": [
          "Entra ID, Conditional Access, PIM (Phase 2 + 6)",
          "Key Vault, encryption, private endpoints (Phase 2)",
          "Network security / NSG / Firewall concepts (Phase 1–2)",
          "Defender for Cloud posture (Phase 2)",
          "Monitoring / Sentinel awareness (Phase 7)"
        ],
        "examDomains": [
          "Manage identity and access",
          "Secure networking",
          "Secure compute, storage, and databases",
          "Configure Azure security posture management / Defender"
        ],
        "gapsToStudyExtra": [
          "Portal click-path familiarity",
          "Microsoft-specific product bundling questions",
          "Hybrid identity (AD Connect) if not labbed"
        ],
        "verdict": "Mostly yes after Phase 2 (+ Phase 6 identity labs). Add Microsoft Learn paths for exam wording."
      },
      {
        "cert": "Google Professional Cloud Security Engineer",
        "afterPhases": "2–6",
        "canSitIf": "GCP equivalents of landing zone + IAM + VPC-SC/KMS + SCC practice.",
        "coversFromPath": [
          "IAM & access (Phases 2, 6)",
          "Network security (Phases 1–2)",
          "Data protection / KMS (Phase 2)",
          "Security operations / SCC (Phases 2, 7)",
          "Compliance / org policy themes (Phase 2, 8)"
        ],
        "examDomains": [
          "Configuring access within a cloud solution environment",
          "Configuring network security",
          "Ensuring data protection",
          "Managing operations within a cloud solution environment",
          "Ensuring compliance"
        ],
        "gapsToStudyExtra": [
          "GCP product names & VPC Service Controls depth",
          "Binary Authorization / Assured Workloads recognition",
          "Case-style practice questions"
        ],
        "verdict": "Yes if your Phase 1–2–6–7 labs were done on GCP (or dual-cloud mapped). Otherwise remap labs to GCP first."
      },
      {
        "cert": "CKA (Certified Kubernetes Administrator)",
        "afterPhases": "5",
        "canSitIf": "You can operate a cluster with kubectl confidently (Hardened GitOps Cluster helps).",
        "coversFromPath": [
          "Workloads, services, storage patterns from Phase 5",
          "Networking & troubleshooting basics",
          "Cluster architecture awareness",
          "RBAC fundamentals (security-relevant subset)"
        ],
        "examDomains": [
          "Cluster architecture, installation & configuration",
          "Workloads & scheduling",
          "Services & networking",
          "Storage",
          "Troubleshooting"
        ],
        "gapsToStudyExtra": [
          "Timed performance exam speed",
          "etcd backup/restore drills",
          "Install/upgrade tasks if you only used kind/managed K8s"
        ],
        "verdict": "Phase 5 covers a large share, but CKA is a hands-on speed exam — schedule Killer.sh-style practice."
      },
      {
        "cert": "CKS (Certified Kubernetes Security Specialist)",
        "afterPhases": "5 (+ 4 supply chain helps)",
        "canSitIf": "CKA passed + Hardened GitOps Cluster (PSS, NetworkPolicy, admission, runtime) done.",
        "coversFromPath": [
          "PSS / securityContext / RBAC (Phase 5)",
          "NetworkPolicy default deny (Phase 5)",
          "Admission policies Kyverno/Gatekeeper (Phase 5)",
          "Image scanning / supply chain ideas (Phase 4–5)",
          "Runtime detection Falco (Phase 5)",
          "Secrets handling themes (Phase 5–6)"
        ],
        "examDomains": [
          "Cluster setup hardening",
          "Cluster hardening",
          "System hardening",
          "Minimize microservice vulnerabilities",
          "Supply chain security",
          "Monitoring, logging, and runtime security"
        ],
        "gapsToStudyExtra": [
          "kube-bench / CIS kubelet API server flags under time pressure",
          "AppArmor/seccomp exam tasks",
          "Specific tool CLIs used in CKS curriculum versions"
        ],
        "verdict": "Strong overlap with Phase 5 project. Still needs dedicated timed CKS labs after CKA."
      },
      {
        "cert": "CCSP",
        "afterPhases": "8+ (later)",
        "canSitIf": "1–2 years applied cloud security depth + architecture docs (not right after Phase 1).",
        "coversFromPath": [
          "Cloud architecture & shared responsibility (whole path)",
          "Data security & IAM (Phases 2, 6)",
          "Platform/application security (Phases 4–5)",
          "Ops / IR / legal-compliance themes (Phases 7–8)",
          "Governance / risk (Phase 8)"
        ],
        "examDomains": [
          "Cloud concepts, architecture and design",
          "Cloud data security",
          "Cloud platform & infrastructure security",
          "Cloud application security",
          "Cloud security operations",
          "Legal, risk and compliance"
        ],
        "gapsToStudyExtra": [
          "Heavy framework/legal memorization",
          "Broad multi-cloud theory beyond your primary cloud",
          "Experience-based judgment questions"
        ],
        "verdict": "Path builds the practical base, but CCSP needs extra study + experience. Not an early exam."
      },
      {
        "cert": "CISSP",
        "afterPhases": "Later (experience-gated)",
        "canSitIf": "Meet ISC2 experience requirements; after broad security practice.",
        "coversFromPath": [
          "Security & risk management vocabulary (Phase 0, 8)",
          "Asset/identity/security ops themes across path",
          "Cloud/app security subset from Phases 2–5"
        ],
        "examDomains": [
          "Security and risk management",
          "Asset security",
          "Security architecture and engineering",
          "Communication and network security",
          "Identity and access management",
          "Security assessment and testing",
          "Security operations",
          "Software development security"
        ],
        "gapsToStudyExtra": [
          "Many domains beyond cloud-only path (physical, broader enterprise)",
          "Managerial / policy-heavy question style",
          "Official CBK study commitment"
        ],
        "verdict": "This roadmap helps cloud-heavy domains only. CISSP is much broader — treat as long-term, not path-complete."
      }
    ]
  }
};
